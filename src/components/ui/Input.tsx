import React from "react";

import useInput from "../../hooks/useInput";
import styles from "./Input.module.scss";

const Input: React.FC<{
  type: string;
  id: string;
  placeholder?: string;
  validationFunction: (userInput: string) => boolean;
  errorMessage: string;
  inputRef?: React.LegacyRef<HTMLInputElement> | undefined;
  formIsValid?: (formInputs: boolean, inputName: string) => boolean;
}> = (props) => {
  const {
    userInput, //submit e value
    userInputIsValid, //form is valid test (formIsValid button render)
    hasError, //classes
    inputChangeHandler,
    inputBlurHandler,
    reset, //submit
  } = useInput(props.validationFunction);

  if (props.formIsValid) {
    props.formIsValid(userInputIsValid, props.id);
  }

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
