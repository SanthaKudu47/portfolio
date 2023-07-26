import { Container } from "components/common/container/Container";
import { Card } from "components/common/experience/card/Card";
import { SectionHeader } from "components/common/section header/SectionHeader";
import styles from "./styles.module.css";

const frontEnd = [
  { domain: "HTML", level: "Intermediate" },
  { domain: "JavaScript", level: "Intermediate" },
  { domain: "Tailwind", level: "Intermediate" },
  { domain: "CSS", level: "Intermediate" },
  { domain: "Bootstrap", level: "Intermediate" },
  { domain: "React", level: "Intermediate" },
];

const backEnd = [
  { domain: "Node Js", level: "Intermediate" },
  { domain: "MongoDB", level: "Intermediate" },
  { domain: "PHP", level: "Intermediate" },
  { domain: "Python", level: "Intermediate" },
  { domain: "MySQL", level: "Intermediate" },
];

const Experience = () => {
  return (
    <Container id="experience">
      <SectionHeader line1="What Skills I have" line2="My Experience" />
      <div className={styles.exp_card_grid}>
        <div className={styles.cols}>
          <Card title="Front End Development" data={frontEnd} />
        </div>
        <div className={styles.cols}>
          <Card title="Back End Development" data={backEnd} />
        </div>
      </div>
    </Container>
  );
};

export { Experience };
