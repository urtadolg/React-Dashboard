import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Title.module.scss";

const Title: React.FC<{ iconName: IconProp; title: string }> = (props) => {
  return (
    <header className={styles.header}>
      <span>
        <FontAwesomeIcon icon={props.iconName} />
      </span>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Title;

//faHome
