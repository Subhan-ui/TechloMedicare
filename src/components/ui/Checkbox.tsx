import React from "react";
import styles from "./checkbox.module.css";
import { checkbox } from "@/models/taskCard";

const Checkbox: React.FC<checkbox> = (props) => (
  <label className={styles.container}>
    <input
      type="checkbox"
      checked={props.checked}
      onChange={props.handleChange}
    />
    <div className={styles.checkmark}></div>
  </label>
);

export default Checkbox;
