import styles from "./Dashboard.module.scss";
import Card from "../../components/ui/Card";
import { useAppSelector } from "../../store/hooks";
import BodyContainer from "../../components/ui/BodyContainer";

function Dashboard() {
  const sales = useAppSelector((state) => state.sales.sales);

  return (
    <BodyContainer iconName="home" title="Dashboard">
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
