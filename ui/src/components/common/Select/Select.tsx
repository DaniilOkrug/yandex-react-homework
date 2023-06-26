"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames";

import styles from "./Select.module.scss";
import ArrowIcon from "@icons/arrow_gray.svg";
import { useClickOutside } from "@/hooks/useClickOuside";

interface SelectProps {
  placeholder?: string;
  onChange?: (value: string | null) => void;
}

type OptionType = {
  label: string;
  value: string | null;
};

const SelectContext = createContext<{
  setOption: Dispatch<SetStateAction<OptionType>>;
}>({
  setOption: () => {},
});

export function Select({
  placeholder,
  children,
  onChange,
}: PropsWithChildren<SelectProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState<OptionType>({
    label: "",
    value: null,
  });

  const selectOptionsRef = useRef<HTMLUListElement>(null);

  useClickOutside(selectOptionsRef, () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(false);
    onChange && onChange(option.value);
  }, [option, onChange]);

  return (
    <div className={styles.select_container}>
      <div
        className={cn(styles.select, {
          [styles.active]: isOpen,
        })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p
          className={cn({
            [styles.placeholder]: !Boolean(option.value),
          })}
        >
          {!Boolean(option.value) ? placeholder : option.label}
        </p>
        <ArrowIcon
          className={cn({
            [styles.arrow_rotated]: isOpen,
          })}
        />
      </div>

      {isOpen && (
        <ul ref={selectOptionsRef} className={styles.options_container}>
          <SelectContext.Provider value={{ setOption }}>
            {children}
          </SelectContext.Provider>
        </ul>
      )}
    </div>
  );
}

interface SelectOptionProps {
  value: string | null;
  label: string;
}
Select.Option = function SelectOption({
  value,
  label,
}: PropsWithChildren<SelectOptionProps>) {
  const { setOption } = useContext(SelectContext);

  return (
    <li
      className={styles.option}
      onClick={() =>
        setOption({
          value,
          label,
        })
      }
    >
      <p>{label}</p>
    </li>
  );
};
