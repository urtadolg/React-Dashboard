import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Dashboard.module.scss";
import Card from "../components/ui/Card";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { add } from "../store/salesSlice";

function Dashboard() {
  const sales = useAppSelector((state) => state.sales.sales);
  console.log(sales);

  const dispatch = useAppDispatch();

  const onAddHandler: () => void = () => {
    dispatch(add());
  };

  return (
    <section className={styles.sectionContainer}>
      <header>
        <span>
          <FontAwesomeIcon icon={faHome} />
        </span>
        <h1>Dashboard</h1>
        <button onClick={onAddHandler}>Add</button>
      </header>
      <div className={styles.summaryCardsContainer}>
        <Card
          className={`${styles.card} ${styles.sales}`}
          title="SALES"
          value={`R$ ${sales}`}
          description="Last 30 days"
        />
        <Card
          className={`${styles.card} ${styles.pending}`}
          title="SALES"
          value={"35673"}
          description="Last 30 days"
        />
        <Card
          className={`${styles.card} ${styles.revenue}`}
          title="SALES"
          value={"35673"}
          description="Last 30 days"
        />
        <Card
          className={`${styles.card} ${styles.newClients}`}
          title="SALES"
          value={"35673"}
          description="Last 30 days"
        />
      </div>
    </section>
  );
}

export default Dashboard;

// Card props = className, title, value, description
