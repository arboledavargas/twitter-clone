import styles from "./action-button.module.css";

export function ActionButton({children}:{children: React.ReactNode}){
	return <button className={styles.button}>{children}</button>
}