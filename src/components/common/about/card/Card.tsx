import { ReactElement } from "react";
import { FaAward } from "react-icons/fa";
import styles from "./styles.module.css";

const Card = ({
  icon,
  heading = "Default",
  text = "default",
}: {
  icon?: ReactElement;
  heading?: string;
  text?: string;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>{icon ? icon : <FaAward />}</div>
      <div className={styles.card__heading}>{heading}</div>
      <div className={styles.card__text}>{text}</div>
    </div>
  );
};

export { Card };
