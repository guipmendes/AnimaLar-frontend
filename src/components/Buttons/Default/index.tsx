import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.scss";

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonDefault = ({ children, ...rest }: ButtonDefaultProps) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};
