import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

export function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <input className={styles.input} {...props} />;
}
