import styles from "./BodyContainer.module.scss";

const BodyContainer: React.FC<{ className?: string }> = (props) => {
  return (
    <section className={`${styles.sectionContainer} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default BodyContainer;
