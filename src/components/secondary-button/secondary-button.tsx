import styles from "./secondary-button.module.css";

export function SecondaryButton({ onClick, children }:{ onClick: () => void, children: React.ReactNode }){
	return <button className={styles.button} onClick={ onClick }>{children}</button>
}