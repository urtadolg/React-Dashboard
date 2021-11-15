import styles from "./Employees.module.scss";
import BodyContainer from "../../components/ui/BodyContainer";
import EmployeesList from "../../components/employees/EmployeesList";
import Button from "../../components/ui/Button";

import { useNavigate } from "react-router";
import { MouseEventHandler } from "react";

const Employees = () => {
  const navigate = useNavigate();

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    navigate("new", { replace: false });
  };

  return (
    <BodyContainer iconName="address-book" title="Employees">
      <section className={styles.listContainer}>
        <div className={styles.titleCommands}>
          <h1> Employees List </h1>
          <Button onClick={onClickHandler}>New Employee</Button>
        </div>
        <EmployeesList />
      </section>
    </BodyContainer>
  );
};

export default Employees;
