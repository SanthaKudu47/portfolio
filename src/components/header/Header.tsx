import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import { MouseEvent, MouseEventHandler, useState } from "react";
import styles from "./styles.module.css";

import mainImage from "assets/images/header/main_image.png";
import { Container } from "components/common/container/Container";
import { Button } from "components/common/button/Button";

const Header = () => {
  return (
    <Container>
      <div className={styles.header__grid}>
        <div className={styles.grid__side_container}>
          <div>
            <a
              href="https://www.facebook.com/"
              target={"_blank"}
              className={styles.social_icons}
            >
              <FaFacebookSquare size={26} />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/?hl=en"
              target={"_blank"}
              className={styles.social_icons}
            >
              <FaInstagramSquare size={26} />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/"
              target={"_blank"}
              className={styles.social_icons}
            >
              <FaGithubSquare size={26} />
            </a>
          </div>
          <div>
            <a
              href="https://dribbble.com/"
              target={"_blank"}
              className={styles.social_icons}
            >
              <FaDribbbleSquare size={26} />
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <div className={styles.header}>
            {/* Text Section */}
            <div className={styles.heder__text_container}>
              <span className={styles.header__line_1}>Hello I'm</span>
              <span className={styles.header__line_2}>Alex Burnard</span>
              <span className={styles.header__line_3}>Fullstack Developer</span>
            </div>
            {/* button section */}
            <div className={styles.header__buttons_container}>
              <Button type="line" text="Download CV" />
              <Button type="fill" text="Let's Talk" />
            </div>
            <div className={styles.header__image_container}>
              {/* Image Section */}
              <img
                src={mainImage}
                alt="main_image"
                className={styles.header__image_container__img}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.grid__side_container} `}>
          <span className={styles.scroll_text}> Scroll Down</span>
        </div>
      </div>
    </Container>
  );
};

export { Header };
