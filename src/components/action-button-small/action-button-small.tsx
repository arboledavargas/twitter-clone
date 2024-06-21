import styles from "./action-button-small.module.css";

export function ActionButtonSmall({ onClick, children }:{ onClick: () => void, children: React.ReactNode }){
	return <button className={styles.button} onClick={ onClick }>{children}</button>
}