import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./styles.module.scss";

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  register: UseFormRegister<any>;
}

export const DefaultInput = ({
  error,
  register,
  label,
  ...rest
}: DefaultInputProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <label htmlFor={rest.name}>{label}</label>
      <input type="text" id={rest.name} {...register(rest.name)} {...rest} />
      {error && <small>{error}</small>}
    </div>
  );
};
