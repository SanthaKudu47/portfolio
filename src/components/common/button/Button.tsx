import styles from "./styles.module.css";

const Button = ({
  text = "click",
  type = "fill",
}: {
  text?: string;
  type: "fill" | "line";
}) => {
  return (
    <div className="button_wrapper">
      <button
        className={`${
          type === "fill" ? styles.button_fill : styles.button_line
        } ${styles.button_base}`}
      >
        {text}
      </button>
    </div>
  );
};

export { Button };
