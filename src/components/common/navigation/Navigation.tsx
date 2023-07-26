import { Container } from "../container/Container";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

import styles from "./styles.module.css";
import { MouseEvent, useState } from "react";

const Navigation = () => {
  const [activeState, setActiveSate] = useState<string>("#");
  const clickHandler: (e: MouseEvent<HTMLAnchorElement>) => void = (e) => {
    const element = e.currentTarget.attributes as NamedNodeMap;
    const href = element.getNamedItem("href")?.value;
    if (href) {
      setActiveSate(href);
    }
  };
  return (
    <Container>
      <div className="flex justify-center">
        <nav className={styles.nav_container}>
          <a
            href="#"
            className={`${activeState === "#" && styles.active}  `}
            onClick={clickHandler}
          >
            <AiOutlineHome />
          </a>
          <a
            href="#about"
            className={`${activeState === "#about" && styles.active}  `}
            onClick={clickHandler}
          >
            <AiOutlineUser />
          </a>
          <a href="#experience" onClick={clickHandler}>
            <BiBook />
          </a>
          <a href="#service" onClick={clickHandler}>
            <RiServiceLine />
          </a>
          <a href="#" onClick={clickHandler}>
            <RiServiceLine />
          </a>
        </nav>
      </div>
    </Container>
  );
};

export { Navigation };
