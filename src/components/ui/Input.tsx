import styles from "./Input.module.css";
import { typeLogout } from "@/models/types";

const Input: React.FC<typeLogout> = ({
  placeholder,
  value,
  onChange,
  name,
}) => {
  const type = name.toLowerCase();

  return (
    <div className={styles["input-container"]}>
      <input
        placeholder={placeholder}
        className={styles["input-field"]}
        type={type === "password" ? "password" : "text"}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor="input-field" className={styles["input-label"]}>
        {placeholder}
      </label>
      <span className={styles["input-highlight"]}></span>
    </div>
  );
};

export default Input;
