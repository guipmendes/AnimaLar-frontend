import { InputHTMLAttributes, Fragment } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./styles.module.scss";

interface Options {
  value: string;
  label: string;
}

interface InputRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  error?: string;
  register: UseFormRegister<any>;
  options: Options[];
}

export const InputRadio = ({
  register,
  options,
  ...rest
}: InputRadioProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.radioContainer}>
        {options.map((option) => (
          <Fragment key={option.value}>
            <input
              defaultChecked={options[0].value === option.value}
              value={option.value}
              id={option.value}
              type="radio"
              {...register(rest.name)}
              {...rest}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
