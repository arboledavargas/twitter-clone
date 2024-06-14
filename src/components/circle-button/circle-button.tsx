import styles from "./circle-button.module.css";

type props = {
	children: React.ReactNode;
}

export function CircleButton({ children }: props){
	return <button className={styles.button}>
		{children}
	</button>
}