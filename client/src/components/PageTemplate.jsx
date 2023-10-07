import styles from "../assets/css/PageTemplate.module.css";

export default function PageTemplate({ children }) {
  return <div className={styles.container}>{children}</div>;
}
