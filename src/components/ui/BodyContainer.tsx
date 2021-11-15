import styles from "./BodyContainer.module.scss";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BodyContainer: React.FC<{
  iconName: IconProp;
  title: string;
  className?: string;
}> = (props) => {
  return (
    <section className={`${styles.sectionContainer} ${props.className}`}>
      <header className={styles.header}>
        <span>
          <FontAwesomeIcon icon={props.iconName} />
        </span>
        <h1>{props.title}</h1>
      </header>
      {props.children}
    </section>
  );
};

export default BodyContainer;
