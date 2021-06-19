import { InputHTMLAttributes, LegacyRef } from "react";

import styles from "./styles.module.scss";

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: LegacyRef<HTMLInputElement>;
  error?: string;
}

export const DefaultInput = ({
  register,
  error,
  ...rest
}: DefaultInputProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <input type="text" ref={register} {...rest} />
      {error && <small>{error}</small>}
    </div>
  );
};
