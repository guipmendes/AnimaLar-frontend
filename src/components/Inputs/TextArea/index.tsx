import { TextareaHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./styles.module.scss";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label: string;
  register: UseFormRegister<any>;
}

export const TextArea = ({
  error,
  register,
  label,
  ...rest
}: TextAreaProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <label htmlFor={rest.name}>{label}</label>
      <textarea id={rest.name} {...register(rest.name)} {...rest} />
      {error && <small>{error}</small>}
    </div>
  );
};
