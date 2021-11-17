import React from "react";

import styles from "./Select.module.scss";
import useInput from "../../hooks/useInput";

/*   type: string;
  id: string;
  placeholder?: string;
  validationFunction: (userInput: string) => boolean;
  errorMessage: string;
  inputRef?: React.LegacyRef<HTMLInputElement> | undefined;
  formIsValid?: (formInputs: boolean, inputName: string) => boolean; */

const Select: React.FC<{
  id: string;
  inputRef?: React.LegacyRef<HTMLSelectElement> | undefined;
  formIsValid?: (formInputs: boolean, inputName: string) => boolean;
  options: string[];
}> = (props) => {
  const selectValidationFunction = (
    userSelectedItem: string | undefined
  ): boolean => {
    if (!userSelectedItem) {
      return false;
    }
    return true;
  };

  const {
    userInput, //submit e value
    userInputIsValid, //form is valid test (formIsValid button render)
    hasError, //classes
    inputChangeHandler,
    inputBlurHandler,
    reset, //submit
  } = useInput(selectValidationFunction);

  if (props.formIsValid) {
    props.formIsValid(userInputIsValid, props.id);
  }

  const selectClasses = hasError
    ? `${styles.input} ${styles.inputError}`
    : styles.input;

  const selectOptions = props.options.map((item) => {
    return (
      <option key={item} value={item.toLowerCase()}>
        {item}
      </option>
    );
  });

  return (
    <div className={styles.selectContainer}>
      <select
        id={props.id}
        name={props.id}
        ref={props.inputRef}
        className={selectClasses}
        value={userInput}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
      >
        <option value={undefined}></option>
        {selectOptions}
      </select>
      {hasError && <p>Select an option.</p>}
    </div>
  );
};

export default Select;
