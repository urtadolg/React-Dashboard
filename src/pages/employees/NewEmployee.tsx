import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NewEmployee.module.scss";
import BodyContainer from "../../components/ui/BodyContainer";
import Button from "../../components/ui/Button";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import FormCancel from "../../components/modal/FormCancel";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { uiActions } from "../../store/uiSlice";

function NewEmployee() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  //state to track input validation
  const [inputState, setInputState] = useState<{}>({});

  //state to decide whether or not render form cancel modal
  const isCanceling: boolean = useAppSelector(
    (state) => state.ui.isCancelFormModalOpened
  );

  //receiving input validation state from Input and Select custom components.
  const onInputChangeHandler: (
    inputId: string,
    userInputIsValid: boolean
  ) => void = (inputId, userInputIsValid) => {
    setInputState((state) => {
      return {
        ...state,
        [inputId]: userInputIsValid,
      };
    });
  };

  //handling form validation
  let formIsInvalid: boolean = Object.values(inputState).includes(false);

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

    //saving data in firebase
    const saveData = async (userData: {}) => {
      const response = await fetch(
        "https://dashboard-store-86edf-default-rtdb.firebaseio.com/employees.json",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "text/JSON",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unable to save data");
      }

      console.log("Dados salvos com sucesso!");
    };

    try {
      saveData(userData);
    } catch (error) {
      console.log(error);
    }
    //fim do fetch
    //redirecting page
    navigate("/Employees", { replace: true });
  };

  //form cancel handler:
  const onCancelHandler = () => {
    dispatch(uiActions.openCancelFormModal());
  };

  const textValidation = (userInput: string): boolean => {
    if (userInput.trim() === "" || parseInt(userInput)) {
      return false;
    }
    return true;
  };

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

  const phoneValidation = (userInput: string): boolean => {
    if (userInput.trim() === "" || !parseInt(userInput)) {
      return false;
    }
    return true;
  };

  return (
    <BodyContainer iconName="home" title="New Employee">
      {isCanceling && <FormCancel />}
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
            onInputChange={onInputChangeHandler}
          />
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            validationFunction={textValidation}
            errorMessage="Please, enter a valid last name."
            inputRef={lastNameInputRef}
            onInputChange={onInputChangeHandler}
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
          onInputChange={onInputChangeHandler}
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
            onInputChange={onInputChangeHandler}
          />
          <Input
            type="text"
            id="phoneNumber"
            placeholder="Phone number"
            validationFunction={phoneValidation}
            errorMessage="Please enter a valid phone number"
            inputRef={phoneNumberInputRef}
            onInputChange={onInputChangeHandler}
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
          onInputChange={onInputChangeHandler}
        />
        <div className={styles.situationContainer}>
          <div>
            <label htmlFor="active">Situation:</label>
            <Select
              id="situation"
              inputRef={situationInputRef}
              onInputChange={onInputChangeHandler}
              options={["Active", "Inactive"]}
            />
          </div>
          <div>
            <label htmlFor="store">Store:</label>
            <Select
              id="store"
              inputRef={storeInputRef}
              onInputChange={onInputChangeHandler}
              options={["Store1", "Store2", "Store3"]}
            />
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <Select
              id="role"
              inputRef={roleInputRef}
              onInputChange={onInputChangeHandler}
              options={["Salesman", "Manager"]}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <Button type="submit" disabled={formIsInvalid}>
            Submit
          </Button>
          <Button type="button" onClick={onCancelHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </BodyContainer>
  );
}

export default NewEmployee;
