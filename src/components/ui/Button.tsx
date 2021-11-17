import React, { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

const Button: React.FC<{
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}> = (props) => {
  return (
    <button
      disabled={props.disabled}
      type={props.type}
      onClick={props.onClick}
      className={`${styles.btn} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
