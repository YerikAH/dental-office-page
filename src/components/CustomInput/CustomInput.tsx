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
  const [typeInput, setTypeInput] = useState("text");
  const [optionsFilter, setOptionsFilter] =
    useState<{ name: string; value: string }[]>(options);
  const [isType, setIsType] = useState({
    text: false,
    date: false,
    email: false,
    number: false,
    hour: false,
    select: false,
    password: false
  });
  const [date, setDate] = useState<Moment | null>(null);
  const [hour, setHour] = useState<Moment | null>(null);
  const [input, setInput] = useState("");

  function selectType(type: InputTypes) {
    switch (type) {
      case InputTypes.TEXT:
        setIsType({ ...isType, text: true });
        break;
      case InputTypes.DATE:
        setIsType({ ...isType, date: true });
        break;
      case InputTypes.EMAIL:
        setIsType({ ...isType, email: true });
        setTypeInput("email");
        break;
      case InputTypes.NUMBER:
        setIsType({ ...isType, number: true });
        break;
      case InputTypes.HOUR:
        setIsType({ ...isType, hour: true });
        break;
      case InputTypes.SELECT:
        setIsType({ ...isType, select: true });
        break;
      case InputTypes.PASSWORD:
        setIsType({ ...isType, password: true });
        break;
      default:
        break;
    }
  }

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
    if (isType.date) {
      setShowDate(!showDate);
    } else if (isType.hour) {
      setShowTime(!showTime);
    } else if (isType.select) {
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
    if(isType.date || isType.hour) return
    
    if (isType.select) {
      setShowSelect(true);
      filterOptions(value);
    }
    setInput(value);
    detectError(isRequired, regex, value, min, max)
  }

  function detectError(
    required: boolean,
    regex: RegExp | undefined,
    value: string,
    min: number | undefined,
    max: number | undefined
  ) {
    let isError = true
    if (required && value.trim() === "") {
      isError = true
      setError({
        text: "Este campo es requerido",
        active: true,
      });
    } else if (regex && !regex.test(value)) {
      isError = true
      setError({
        text: "Este campo no es valido",
        active: true,
      });
    } else if (min && value.length < min) {
      isError = true
      setError({
        text: "Este campo tiene que tener minimo " + min + " caracteres",
        active: true,
      });
    } else if (max && max < value.length) {
      isError = true
      setError({
        text: "Este campo tiene que tener maximo " + max + " caracteres",
        active: true,
      });
    } else {
      isError = false
      setError({
        text: "",
        active: false,
      });
    }
    setForm(value, name, isError);

  }
  function setForm(value: string, name: string, error: boolean) {
    if (setFormState) {
      setFormState(value, name, error);
    }
  }

  useEffect(() => {
    if(isSubmit) detectError(isRequired, regex, input, min, max);
  }, [isSubmit]);

  useEffect(() => {
    selectType(type);
  }, [type]);

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
              type={typeInput}
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
          {isType.date && showDate && (
            <div className={s.modal}>
              <DateCalendar
                showDaysOutsideCurrentMonth
                fixedWeekNumber={6}
                value={date}
                onChange={(newValue) => onChangeCalendar(newValue)}
              />
            </div>
          )}
          {isType.hour && showTime && (
            <div className={s.modal}>
              <MultiSectionDigitalClock
                value={hour}
                onChange={(newValue) => onChangeHour(newValue)}
              />
            </div>
          )}
          {isType.select && showSelect && (
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
