/* eslint-disable react/prop-types */
import styles from './index.module.css';

export default function Input({ label, classWrap, ...inputProps }) {
  return (
    <>
      {label ? (
        <div className={`flex f-column ${classWrap} ${styles.inputWrap}`}>
          <label htmlFor={label}>{label}</label>
          <input className={styles.input} {...inputProps} />
        </div>
      ) : (
        <input className={styles.input} {...inputProps} />
      )}
    </>
  );
}
