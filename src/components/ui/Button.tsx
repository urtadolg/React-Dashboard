import React, { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

const Button: React.FC<{
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> /* (event: HTMLElement) => void */;
}> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${styles.btn} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
