import {
  PropsWithChildren,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

export enum ButtonSize {
  small,
  big,
}

export enum ButtonStyle {
  filled,
  outlined,
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  classname?: string;
  size?: ButtonSize;
  styleType?: ButtonStyle;
}

export function Button({
  children,
  classname,
  size = ButtonSize.small,
  styleType = ButtonStyle.filled,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(styles.btn, classname, {
        [styles.big]: size === ButtonSize.big,
        [styles.small]: size === ButtonSize.small,
        [styles.outlined]: styleType === ButtonStyle.outlined,
        [styles.filled]: styleType === ButtonStyle.filled,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
