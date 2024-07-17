import styles from "./horizontal-separator.module.css";

export function HorizontalSeparator({ text }:{ text: string }){
	return <div className={styles.separator}>
			<div className={styles.line}></div>
			<span className={styles.text}>{text}</span>
			<div className={styles.line}></div>
		</div>

}