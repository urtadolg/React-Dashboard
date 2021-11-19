import React, { useEffect } from "react";

import useInput from "../../hooks/useInput";
import styles from "./Input.module.scss";

const Input: React.FC<{
  type: string;
  id: string;
  placeholder?: string;
  validationFunction: (userInput: string) => boolean;
  errorMessage: string;
  inputRef?: React.LegacyRef<HTMLInputElement> | undefined;
  onInputChange: (inputId: string, userInputIsValid: boolean) => void;
}> = (props) => {
  //calling useInput custom hook to handle input validation
  const {
    userInput,
    userInputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset, //129
  } = useInput(props.validationFunction);

  //sending input validation state to NewEmployee component
  useEffect(() => {
    props.onInputChange(props.id, userInputIsValid);
  }, [userInputIsValid]);

  //handling error style classes
  const inputClasses = hasError
    ? `${styles.input} ${styles.inputError}`
    : styles.input;

  return (
    <div className={styles.inputContainer}>
      <input
        className={inputClasses}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder && props.placeholder}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        value={userInput}
        ref={props.inputRef}
      />
      {hasError && <p>{props.errorMessage}</p>}
    </div>
  );
};

export default Input;
