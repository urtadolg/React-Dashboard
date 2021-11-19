import React, { useEffect } from "react";

import styles from "./Select.module.scss";
import useInput from "../../hooks/useInput";

const Select: React.FC<{
  id: string;
  inputRef?: React.LegacyRef<HTMLSelectElement> | undefined;
  onInputChange: (inputId: string, userInputIsValid: boolean) => void;
  options: string[];
}> = (props) => {
  //validation function check if select is null
  const selectValidationFunction = (
    userSelectedItem: string | undefined
  ): boolean => {
    if (!userSelectedItem) {
      return false;
    }
    return true;
  };

  //calling useInput custom hook to handle input validation
  const {
    userInput,
    userInputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput(selectValidationFunction);

  //sending input validation state to NewEmployee component
  useEffect(() => {
    props.onInputChange(props.id, userInputIsValid);
  }, [userInputIsValid]);

  //handling error style classes
  const selectClasses = hasError
    ? `${styles.input} ${styles.inputError}`
    : styles.input;

  //mapping through props.options and rendering it.
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
