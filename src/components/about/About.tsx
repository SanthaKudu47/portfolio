import { Container } from "components/common/container/Container";
import styles from "./styles.module.css";
import mainImage from "assets/images/about/main_image.png";
import { Button } from "components/common/button/Button";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Card } from "components/common/about/card/Card";

type ICardDataType = {
  icon: () => JSX.Element;
  heading: string;
  text: string;
};

const cardData: ICardDataType[] = [
  {
    icon: () => <FaAward />,
    heading: "Experience",
    text: "3 +Years Working",
  },
  {
    icon: () => <FiUsers />,
    heading: "Clients",
    text: "200+ Worldwide",
  },
  {
    icon: () => <VscFolderLibrary />,
    heading: "Projects",
    text: "80+ Completed",
  },
];

const About = () => {
  return (
    <Container id="about">
      <div>
        <div className={styles.container__about_title}>
          <span className={styles.line_1}>get to Know</span>
          <span className={styles.line_2}>About Me</span>
        </div>
        <div className={styles.container__grid}>
          <div className={styles.container__grid__left}>
            <div className={styles.image_container}>
              <img src={mainImage} alt="about_image" />
            </div>
            <div className={styles.image_bg} />
          </div>
          <div className={styles.container__grid__right}>
            <div className={styles.card_container}>
              {cardData.map((card, index) => {
                return (
                  <Card
                    key={index}
                    icon={card.icon()}
                    heading={card.heading}
                    text={card.text}
                  />
                );
              })}
            </div>
            <div className={styles.about_text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              excepturi beatae mollitia nihil quibusdam deleniti saepe,
              inventore fuga architecto vero suscipit perferendis, sint maiores
              magni ab, sapiente ipsam autem officia!
            </div>
            <div className={styles.about_button}>
              <Button text="Let's Talk" type="fill" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { About };
