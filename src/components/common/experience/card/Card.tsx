import { Element } from "../element/Element";
import styles from "./styles.module.css";

type ExperienceType = {
  domain: string;
  level: string;
};

const defaultData = [
  { domain: "HTML", level: "Intermediate1" },
  { domain: "HTML", level: "Intermediate2" },
  { domain: "HTML", level: "Intermediate3" },
  { domain: "HTML", level: "Intermediate4" },
  { domain: "HTML", level: "Intermediate5" },
  { domain: "HTML", level: "Intermediate6" },
];

const Card = ({
  data = defaultData,
  title = "Front End Development",
}: {
  data?: ExperienceType[];
  title?: string;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.elements_container}>
        {data.map((data, index) => {
          return (
            <Element key={index} domain={data.domain} level={data.level} />
          );
        })}
      </div>
    </div>
  );
};

export { Card };
