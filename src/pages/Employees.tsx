import React from "react";

import styles from "./Employees.module.scss";
import Title from "../components/ui/Title";
import BodyContainer from "../components/ui/BodyContainer";
import EmployeeItem from "../components/employees/EmployeeItem";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { remove } from "../store/employeeSlice";

const Employees = () => {
  const dummyData = useAppSelector((state) => state.employee.dummyData);
  const dispatch = useAppDispatch();

  const onDeleteHandler = (index: number, event: React.MouseEvent) => {
    dispatch(remove(index));
    return event;
  };

  return (
    <BodyContainer>
      <Title iconName="address-book" title="Employees" />
      <section className={styles.listContainer}>
        <h1> Employees List </h1>

        <section>
          <header>
            <div className={styles.col}>ID</div>
            <div className={styles.col}>Name</div>
            <div className={styles.col}>Email</div>
            <div className={styles.col}>Phone</div>
            <div className={styles.col}>Skype</div>
            <div className={styles.col}>Active</div>
            <div className={styles.col}>Store</div>
            <div className={styles.col}>Manager</div>
          </header>

          {dummyData.map((item) => {
            return (
              <EmployeeItem
                key={item.id}
                classNameRow={styles.row}
                classNameCol={styles.col}
                employeeData={item}
              />
            );
          })}
        </section>
      </section>
    </BodyContainer>
  );
};

export default Employees;
