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
  icon,
  label,
  placeholder,
  type,
  withIcon,
  multiline = false,
  options = [],
  isRequired = false,
  isLabel = true,
}: CustomInputProps) {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [error, setError] = useState({
    text: "",
    active: false,
  });
  const [typeInput, setTypeInput] = useState("text");
  const [optionsFilter, setOptionsFilter] = useState<
    { name: string; phone: string }[]
  >(options);
  const [isType, setIsType] = useState({
    text: false,
    date: false,
    email: false,
    number: false,
    hour: false,
    select: false,
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
  }
  function onChangeCalendar(newValue: Moment | null) {
    const dateString = newValue?.format("YYYY-MM-DD");
    setDate(newValue);
    setInput(dateString ?? "");
    setShowDate(!showDate);
  }
  function onChangeInput(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const value = e.target.value;
    if (isType.date || isType.hour) {
      setInput("");
    } else if (isType.email) {
      setInput(value);
    } else if (isType.number) {
      const regex = /^\d+$/;
      noWrite(regex, value);
    } else if (isType.select) {
      setShowSelect(true);
      setInput(value);
      filterOptions(value);
    } else if (isType.text) {
      const regex = /^[a-zA-Z ]*$/;
      noWrite(regex, value);
    }
  }
  function noWrite(regex: RegExp, value: string) {
    if (regex.test(value)) {
      setInput(value);
    } else {
      const deleteLast = value.slice(0, value.length - 1);
      setInput(deleteLast);
    }
  }
  function onChangeHour(newValue: Moment | null) {
    const hourString = newValue?.format("HH:mm");
    setHour(newValue);
    setInput(hourString ?? "");
    setShowTime(!showTime);
  }

  useEffect(() => {
    selectType(type);
  }, [type]);
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className={s.input}>
        {isLabel && (
          <label htmlFor={label}>
            {label}
            {isRequired && <span className={s.required}>*</span>}
          </label>
        )}
        <div className={`${s.input__contain}`}>
          {!multiline
            ? (
              <input
                id={label}
                type={typeInput}
                name={label}
                value={input}
                placeholder={placeholder}
                className={`${s.input__text} ${
                  !withIcon && `${s["input__text--without"]}`
                }`}
                onClick={handleClick}
                onChange={(e) => onChangeInput(e)}
              />
            )
            : (
              <textarea
                name={label}
                id={label}
                onChange={(e) => onChangeInput(e)}
                value={input}
                placeholder={placeholder}
                className={`${s.input__text} ${s.textarea__text} ${
                  !withIcon && `${s["input__text--without"]}`
                }`}
              >
              </textarea>
            )}

          {withIcon && icon}
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
              {optionsFilter.length !== 0
                ? (
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
                )
                : <p>No hay resultados de la busqueda</p>}
            </div>
          )}
        </div>
      </div>
    </LocalizationProvider>
  );
}
export default CustomInput;
