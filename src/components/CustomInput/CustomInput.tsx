/* eslint-disable react-hooks/exhaustive-deps */
import s from "./CustomInput.module.css";
import { CustomInputProps } from "../../interface/props";
import { useEffect, useState } from "react";
import { InputTypes } from "../../interface/enum";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { Moment } from "moment";

function CustomInput({
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
  regex,
  max,
  min,
  setFormState,
  isSubmit,
}: CustomInputProps) {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [error, setError] = useState({
    text: "",
    active: false,
  });
  const [optionsFilter, setOptionsFilter] =
    useState<{ name: string; value: string }[]>(options);

  const [date, setDate] = useState<Moment | null>(null);
  const [hour, setHour] = useState<Moment | null>(null);
  const [input, setInput] = useState("");

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

  function handleClick() {
    if (type === InputTypes.DATE) {
      setShowDate(!showDate);
    } else if (type === InputTypes.HOUR) {
      setShowTime(!showTime);
    } else if (type === InputTypes.SELECT) {
      setShowSelect(!showSelect);
    }
  }
  function handleClickButton(name: string) {
    setInput(name);
    setShowSelect(!showSelect);
    detectError(isRequired, regex, name ?? "", min, max);
  }
  function onChangeCalendar(newValue: Moment | null) {
    const dateString = newValue?.format("YYYY-MM-DD");
    setDate(newValue);
    setInput(dateString ?? "");
    setShowDate(!showDate);
    detectError(isRequired, regex, dateString ?? "", min, max);
  }
  function onChangeHour(newValue: Moment | null) {
    const hourString = newValue?.format("HH:mm");
    setHour(newValue);
    setInput(hourString ?? "");
    setShowTime(!showTime);
    detectError(isRequired, regex, hourString ?? "", min, max);
  }
  function onChangeInput(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = e.target.value;
    if (type === InputTypes.DATE || type === InputTypes.HOUR) return;

    if (type === InputTypes.SELECT) {
      setShowSelect(true);
      filterOptions(value);
    }
    setInput(value);
    detectError(isRequired, regex, value, min, max);
  }

  function detectError(
    required: boolean,
    regex: RegExp | undefined =/./,
    value: string,
    min: number | undefined = 0,
    max: number | undefined = 10000
  ) {
    const modelError = {
      text: "",
      active: true,
    };
    const validations = {
      1: required && value.trim() === "" && "Este campo es requerido",
      2: !regex.test(value) && "Este campo no es valido",
      3: min && value.length < min && "Este campo tiene que tener minimo " + min,
      4: max && max < value.length && "Este campo tiene que tener maximo " + max,
    }
    const idx = Object.values(validations).findIndex(item => typeof item === "string")

    if(idx === -1){
      modelError.active = false;
    }else{
      const message = Object.values(validations)[idx]
      modelError.text = message as string;
    }
    
    setError(modelError);
    setForm(value, name, modelError.active);
  }
  function setForm(value: string, name: string, error: boolean) {
    if (setFormState) {
      setFormState(value, name, error);
    }
  }

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
              type="text"
              name={name}
              value={input}
              placeholder={placeholder}
              className={`${s.input__text} ${
                !withIcon && `${s["input__text--without"]}`
              }`}
              onClick={handleClick}
              onChange={(e) => onChangeInput(e)}
              autoComplete="off"
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
          {error.active && <p className={s.input__error}>{error.text}</p>}
          {type === InputTypes.DATE && showDate && (
            <div className={s.modal}>
              <DateCalendar
                showDaysOutsideCurrentMonth
                fixedWeekNumber={6}
                value={date}
                onChange={(newValue) => onChangeCalendar(newValue)}
              />
            </div>
          )}
          {type === InputTypes.HOUR && showTime && (
            <div className={s.modal}>
              <MultiSectionDigitalClock
                value={hour}
                onChange={(newValue) => onChangeHour(newValue)}
              />
            </div>
          )}
          {type === InputTypes.SELECT && showSelect && (
            <div className={s.modal}>
              {optionsFilter.length !== 0 ? (
                <>
                  {optionsFilter.map((item, idx) => (
                    <button
                      key={idx}
                      className={s.modal__button}
                      onClick={() => handleClickButton(item.name)}
                    >
                      {item.name}
                    </button>
                  ))}
                </>
              ) : (
                <p>No hay resultados de la busqueda</p>
              )}
            </div>
          )}
        </div>
      </div>
    </LocalizationProvider>
  );
}
export default CustomInput;
