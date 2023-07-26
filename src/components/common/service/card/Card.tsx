import { BiCheck } from "react-icons/bi";

import styles from "./styles.module.css";

const Card = ({
  title = "title",
  data = ["check"],
}: {
  title?: string;
  data?: string[];
}) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.header}>{title}</div>
      <div className={styles.list_container}>
        <ul className={styles.list}>
          {data.map((listItem, index) => {
            return (
              <li key={index}>
                <div>
                  <BiCheck />
                </div>

                <p>{listItem}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { Card };
