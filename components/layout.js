import styles from './layout.module.css';
export default function Layount ({ children }) {
    return <div className={styles.container}>
        {children}
    </div>
}