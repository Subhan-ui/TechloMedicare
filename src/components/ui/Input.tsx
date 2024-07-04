import styles from "./Input.module.css";

const Input: React.FC<{
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, value, onChange, name }) => {
  const type = name.toLowerCase();


  return (
    <div className={styles["input-container"]}>
      <input
        placeholder={placeholder}
        className={styles["input-field"]}
        type={type==='password'?"password":"text"}
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
