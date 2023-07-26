import { Container } from "components/common/container/Container";
import { SectionHeader } from "components/common/section header/SectionHeader";
import { Card } from "components/common/service/card/Card";

import { cardOneData, cardTwoData, cardThreeData } from "./data";
import styles from "./styles.module.css";

const Service = () => {
  return (
    <Container id="service">
      <SectionHeader line1="What I Offer" line2="Services" />
      <div className={styles.service_container}>
        <div className={styles.cols}>
          <Card title="UI/UX Design" data={cardOneData} />
        </div>
        <div className={styles.cols}>
          <Card title="Web Development" data={cardTwoData} />
        </div>
        <div className={styles.cols}>
          <Card title="Content Creation" data={cardThreeData} />{" "}
        </div>
      </div>
    </Container>
  );
};

export { Service };
