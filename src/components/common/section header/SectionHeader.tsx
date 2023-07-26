import styles from "./styles.module.css";

const SectionHeader = ({
  line1 = "text1",
  line2 = "text2",
}: {
  line1?: string;
  line2?: string;
}) => {
  return (
    <div className={styles.header}>
      <span className={styles.line_1}>{line1}</span>
      <span className={styles.line_2}>{line2}</span>
    </div>
  );
};

export { SectionHeader };
