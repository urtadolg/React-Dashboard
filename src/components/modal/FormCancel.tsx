import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";

import styles from "./FormCancel.module.scss";
import classes from "../ui/Button.module.scss";
import Button from "../ui/Button";
import { useAppDispatch } from "../../store/hooks";
import { uiActions } from "../../store/uiSlice";

const FormCancel = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCancelHandler = () => {
    dispatch(uiActions.closeCancelFormModal());
    console.log("trying to cancel");
  };

  const onConfirmHandler = () => {
    navigate("/employees", { replace: true });
    dispatch(uiActions.closeCancelFormModal());
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>
          <div className={styles.modalBackground} onClick={onCancelHandler} />
          <div className={styles.modalContainer}>
            <header>
              <h1>Do you want to leave?</h1>
            </header>
            <p>All unsaved data will be lost</p>
            <div>
              <Button onClick={onConfirmHandler}>Yes</Button>
              <Button className={classes.btnCancel} onClick={onCancelHandler}>
                No
              </Button>
            </div>
          </div>
        </>,
        document.getElementById("modalPortal") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default FormCancel;
