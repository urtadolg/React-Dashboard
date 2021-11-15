import styles from "./EmployeesList.module.scss";
import { useAppSelector } from "../../store/hooks";
import EmployeeItem from "./EmployeeItem";

const EmployeesList = () => {
  const dummyData = useAppSelector((state) => state.employee.dummyData);

  return (
    <section className={styles.listSection}>
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
  );
};

export default EmployeesList;
