import React from "react";
import styles from "./styles.module.css";

const Container = ({
  children,
  id = "no_id",
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <div id={id} className={styles.container}>
      {children}
    </div>
  );
};

export { Container };
