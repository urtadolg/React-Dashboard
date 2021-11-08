import styles from "./Card.module.css";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  return (
    <div className={`${styles.cardContainer} ${props.className}`}>
      <FontAwesomeIcon className={styles.iconDummy} icon={faHome} />
      <div>
        <h2>{props.title}</h2>
        <span>{props.value}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

// Card props = className, title, value, description
