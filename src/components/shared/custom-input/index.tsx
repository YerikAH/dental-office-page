"use client";
import s from "./index.module.css";
import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Moment } from "moment";
import { InputTypes } from "@/types";
import { InputModal } from "./input-modal";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: InputTypes;
  withIcon: boolean;
  icon?: JSX.Element;
  multiline?: boolean;
  options?: { name: string; value: string }[];
  isRequired?: boolean;
  isLabel?: boolean;
  regex?: RegExp;
  max?: number;
  min?: number;
  setFormState?: (value: string, name: string, error: boolean) => void;
  isSubmit?: boolean;
}

export const CustomInput = ({
  name,
  icon,
  label,
  placeholder,
  type,
  withIcon,
  multiline = false,
  options = [],
  isRequired = false,
  isLabel = true,
  regex = /./,
  max = 255,
  min = 4,
  setFormState,
  isSubmit,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState(false);
  const [optionsFilter, setOptionsFilter] =
    useState<{ name: string; value: string }[]>(options);
  const [moment, setMoment] = useState<Moment | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState({
    text: "",
    active: false,
  });

  function filterOptions(value: string) {
    const isEqual = options.find((item) => item.name === value);

    if (value.trim() === "" || isEqual !== undefined) {
      setOptionsFilter(options);
      return;
    }

    const filterOps = options.filter((item) => {
      const valueLowerCase = value.toLocaleLowerCase();
      const lowerCase = item.name.toLocaleLowerCase();
      return lowerCase.includes(valueLowerCase);
    });

    setOptionsFilter(filterOps);
  }

  function onOpenModal() {
    const typeAllowed = [InputTypes.DATE, InputTypes.HOUR, InputTypes.SELECT];
    if (typeAllowed.includes(type)) {
      setModal(!modal);
    }
  }

  function handleClickButton(name: string) {
    setInput(name);
    setModal(!modal);
    detectError(isRequired, regex, name ?? "", min, max);
  }

  function onChangeCalendar(newValue: Moment | null) {
    const format = type === InputTypes.DATE ? "YYYY-MM-DD" : "HH:mm";
    const dateString = newValue?.format(format);
    setMoment(newValue);
    setInput(dateString ?? "");
    setModal(!modal);
    detectError(isRequired, regex, dateString ?? "", min, max);
  }

  function onChangeInput(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = e.target.value;
    if (type === InputTypes.DATE || type === InputTypes.HOUR) return;

    if (type === InputTypes.SELECT) {
      setModal(true);
      filterOptions(value);
    }
    setInput(value);
    detectError(isRequired, regex, value, min, max);
  }

  function detectError(
    required: boolean,
    regex: RegExp,
    value: string,
    min: number,
    max: number
  ) {
    const modelError = {
      text: "",
      active: true,
    };
    const validations = [
      required && value.trim() === "" && "Este campo es requerido",
      !regex.test(value) && "Este campo no es valido",
      min && value.length < min && "Este campo tiene que tener minimo " + min,
      max && max < value.length && "Este campo tiene que tener maximo " + max,
    ];
    const idx = validations.findIndex((item) => typeof item === "string");

    if (idx === -1) {
      modelError.active = false;
    } else {
      const message = validations[idx];
      modelError.text = message as string;
    }

    setError(modelError);
    setForm(value, name, modelError.active);
  }

  const setForm = (value: string, name: string, error: boolean) =>
    setFormState?.(value, name, error);

  useEffect(() => {
    if (isSubmit) detectError(isRequired, regex, input, min, max);
  }, [isSubmit]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className={s.input}>
        {isLabel && (
          <label htmlFor={name}>
            {label}
            {isRequired && <span className={s.required}>*</span>}
          </label>
        )}
        <div className={`${s.input__contain}`}>
          {!multiline ? (
            <input
              id={name}
              name={name}
              value={input}
              placeholder={placeholder}
              className={`${s.input__text} ${
                !withIcon && `${s["input__text--without"]}`
              } ${password && `${s.hidden}`}`}
              onClick={onOpenModal}
              onChange={(e) => onChangeInput(e)}
              autoComplete="off"
              spellCheck="false"
            />
          ) : (
            <textarea
              name={name}
              id={name}
              onChange={(e) => onChangeInput(e)}
              value={input}
              placeholder={placeholder}
              className={`${s.input__text} ${s.textarea__text} ${
                !withIcon && `${s["input__text--without"]}`
              }`}
            ></textarea>
          )}

          {withIcon && icon}
          {InputTypes.PASSWORD === type && (
            <button
              className={s.btn__show}
              type="button"
              onClick={() => setPassword(!password)}
            >
              {!password ? "NO MOSTRAR" : "MOSTRAR"}
            </button>
          )}
          {error.active && <p className={s.input__error}>{error.text}</p>}
          {modal && (
            <InputModal
              type={type}
              onClick={handleClickButton}
              onChange={onChangeCalendar}
              value={moment}
              options={optionsFilter}
            />
          )}
        </div>
      </div>
    </LocalizationProvider>
  );
};
