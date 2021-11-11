import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Dashboard.module.scss";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { add } from "../store/salesSlice";
import BodyContainer from "../components/ui/BodyContainer";

function Dashboard() {
  const sales = useAppSelector((state) => state.sales.sales);
  console.log(sales);

  const dispatch = useAppDispatch();

  const onAddHandler: () => void = () => {
    dispatch(add());
  };

  return (
    <BodyContainer className={styles.sectionContainer}>
      <Title iconName="home" title="Dashboard" />
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
    </BodyContainer>
  );
}

export default Dashboard;

// Card props = className, title, value, description
