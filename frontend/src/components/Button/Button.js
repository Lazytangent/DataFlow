import styles from './Button.module.css';

const Button = ({ label }) => {
  return (
    <button type="button">{label} className={styles.button}</button>
  );
};

export default Button;
