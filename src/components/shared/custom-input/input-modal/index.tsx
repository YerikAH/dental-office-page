"use client";
import s from "./index.module.css";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { InputTypes } from "@/types";
import { Moment } from "moment";

export interface Props {
  type: InputTypes;
  value?: Moment | null;
  onChange?: (newValue: Moment | null) => void;
  options?: {
    name: string;
    value: string;
  }[];
  onClick?: (value: string) => void;
}
export const InputModal = ({
  type,
  value,
  onChange,
  options,
  onClick,
}: Props) => {
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
};
