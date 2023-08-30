import s from './InputModal.module.css'
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { InputModalProps } from "../../interface/props";
import { InputTypes } from "../../interface/enum";

function InputModal({
  type,
  value,
  onChange,
  options,
  onClick,
}: InputModalProps) {
  console.log(type, InputTypes.DATE);
  return (
    <div className={s.modal}>
      {type === InputTypes.DATE && (
        <DateCalendar
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          value={value}
          onChange={(newValue) => onChange?.(newValue)}
        />
      )}
      {type === InputTypes.HOUR && (
        <MultiSectionDigitalClock
          value={value}
          onChange={(newValue) => onChange?.(newValue)}
        />
      )}
      {type === InputTypes.SELECT && (
        <>
          {options?.length !== 0 ? (
            <>
              {options?.map((item, idx) => (
                <button
                  key={idx}
                  className={s.modal__button}
                  onClick={() => onClick?.(item.name)}
                >
                  {item.name}
                </button>
              ))}
            </>
          ) : (
            <p>No hay resultados de la busqueda</p>
          )}
        </>
      )}
    </div>
  );
}
export default InputModal