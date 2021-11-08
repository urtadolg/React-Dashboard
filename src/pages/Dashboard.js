import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Dashboard.module.css";
import Card from "../components/ui/Card";

function Dashboard() {
  return (
    <section className={styles.sectionContainer}>
      <header className={styles.header}>
        <span>
          <FontAwesomeIcon icon={faHome} />
        </span>
        <h1>Dashboard</h1>
      </header>
      <div className={styles.summaryCardsContainer}>
        <Card
          className={`${styles.card} ${styles.sales}`}
          title="SALES"
          value="35673"
          description="Last 30 days"
        />
        <Card
          className={`${styles.card} ${styles.pending}`}
          title="SALES"
          value="35673"
          description="Last 30 days"
        />
        <Card
          className={`${styles.card} ${styles.revenue}`}
          title="SALES"
          value="35673"
          description="Last 30 days"
        />
        <Card
          className={`${styles.card} ${styles.newClients}`}
          title="SALES"
          value="35673"
          description="Last 30 days"
        />
      </div>
    </section>
  );
}

export default Dashboard;

// Card props = className, title, value, description
