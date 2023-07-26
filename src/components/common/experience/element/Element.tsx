import { BsPatchCheckFill } from "react-icons/bs";
import styles from "./styles.module.css";

const Element = ({
  domain = "domain",
  level = "level",
}: {
  domain?: string;
  level?: string;
}) => {
  return (
    <div className={styles.element}>
      <div className={styles.row}>
        <div className={styles.icon}>
          <BsPatchCheckFill />
        </div>
        <div className={styles.domain}>{domain}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.icon}></div>
        <div className={styles.level}>{level}</div>
      </div>
    </div>
  );
};

export { Element };
