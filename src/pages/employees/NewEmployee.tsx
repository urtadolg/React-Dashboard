import React, { useRef } from "react";

import styles from "./NewEmployee.module.scss";
import BodyContainer from "../../components/ui/BodyContainer";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";

/* "um objeto no newEmployee.tsx recebe todos o input validation atravez de um objeto"; */

const inputsValidation: { [firstName: string]: boolean } = {};
let isFormValid: boolean = false;

function NewEmployee() {
  //form input refs:
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const areaCodeInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const skypeInputRef = useRef<HTMLInputElement>(null);
  const situationInputRef = useRef<HTMLSelectElement>(null);
  const storeInputRef = useRef<HTMLSelectElement>(null);
  const roleInputRef = useRef<HTMLSelectElement>(null);

  //form validation:
  const formValidation = (formInputs: boolean, inputName: string): boolean => {
    inputsValidation[inputName] = formInputs;

    if (
      Object.values(inputsValidation).every((item) => item === true) &&
      situationInputRef.current!.value
    ) {
      isFormValid = true;
      return true;
    }

    isFormValid = false;
    return false;
  };

  //form submit handler:
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const userData = {
      firstName: firstNameInputRef.current!.value,
      lastName: lastNameInputRef.current!.value,
      email: emailInputRef.current!.value,
      areaCode: areaCodeInputRef.current!.value,
      phoneNumber: phoneNumberInputRef.current!.value,
      skype: skypeInputRef.current!.value,
      situation: situationInputRef.current!.value,
      store: storeInputRef.current!.value,
      role: roleInputRef.current!.value,
    };

    console.log(userData);
  };

  // Text validation
  const textValidation = (userInput: string): boolean => {
    if (userInput.trim() === "" || parseInt(userInput)) {
      return false;
    }
    return true;
  };

  // email validation
  const emailValidation = (userInput: string): boolean => {
    if (
      userInput.trim() === "" ||
      !userInput.includes("@") ||
      userInput.trim().indexOf("@") === userInput.length - 1
    ) {
      return false;
    }
    return true;
  };

  // phone validation
  const phoneValidation = (userInput: string): boolean => {
    if (userInput.trim() === "" || !parseInt(userInput)) {
      return false;
    }
    return true;
  };
  console.log(!isFormValid);

  return (
    <BodyContainer iconName="home" title="New Employee">
      <form className={styles.formContainer} onSubmit={onSubmitHandler}>
        <label htmlFor="fullName">Name:</label>
        <div className={styles.fullName}>
          <Input
            type="text"
            id="firstName"
            placeholder="First Name"
            validationFunction={textValidation}
            errorMessage="Please, enter a valid first name."
            inputRef={firstNameInputRef}
            formIsValid={formValidation}
          />
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            validationFunction={textValidation}
            errorMessage="Please, enter a valid last name."
            inputRef={lastNameInputRef}
            formIsValid={formValidation}
          />
        </div>
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          validationFunction={emailValidation}
          errorMessage={"Invalid email."}
          inputRef={emailInputRef}
          formIsValid={formValidation}
        />
        <label htmlFor="phone">Phone number:</label>
        <div className={styles.phoneNumber}>
          <Input
            type="text"
            id="areaCode"
            placeholder="Area code"
            validationFunction={phoneValidation}
            errorMessage="Invalid area code."
            inputRef={areaCodeInputRef}
            formIsValid={formValidation}
          />
          <Input
            type="text"
            id="phoneNumber"
            placeholder="Phone number"
            validationFunction={phoneValidation}
            errorMessage="Please enter a valid phone number"
            inputRef={phoneNumberInputRef}
            formIsValid={formValidation}
          />
        </div>
        <label htmlFor="skype">Skype:</label>
        <Input
          type="text"
          id="skype"
          placeholder="your.user"
          validationFunction={textValidation}
          errorMessage="Please, enter a valid skype user"
          inputRef={skypeInputRef}
          formIsValid={formValidation}
        />
        <div className={styles.situationContainer}>
          <div>
            <label htmlFor="active">Situation:</label>
            <Select
              id="situation"
              inputRef={situationInputRef}
              formIsValid={formValidation}
              options={["Active", "Inactive"]}
            />
          </div>
          <div>
            <label htmlFor="store">Store:</label>
            <Select
              id="store"
              inputRef={storeInputRef}
              formIsValid={formValidation}
              options={["Store1", "Store2", "Store3"]}
            />
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <Select
              id="role"
              inputRef={roleInputRef}
              formIsValid={formValidation}
              options={["Salesman", "Manager"]}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <Button type="submit" disabled={!isFormValid}>
            Submit
          </Button>
          <Button type="button">Cancel</Button>
        </div>
      </form>
    </BodyContainer>
  );
}

export default NewEmployee;
