import React, { useState } from "react";

function useInput(validationFunction: (userInput: string) => boolean): {
  userInput: string;
  userInputIsValid: boolean;
  hasError: boolean;
  inputChangeHandler: (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  inputBlurHandler: (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  reset: () => void;
} {
  //states
  const [userInput, setUserInput] = useState<string>("");
  const [inputIsTouched, setInputIsTouched] = useState<boolean>(false);

  //input validation
  const userInputIsValid: boolean = validationFunction(userInput);
  const hasError = !userInputIsValid && inputIsTouched;

  // functions
  const inputChangeHandler = (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setUserInput(event.currentTarget.value);
  };

  const inputBlurHandler = (
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setUserInput("");
    setInputIsTouched(false);
  };

  return {
    userInput,
    userInputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
