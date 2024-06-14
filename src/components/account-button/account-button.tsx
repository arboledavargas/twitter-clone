import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./account-button.module.css";

export function AccountButton() {
	return (
		<button className={styles.button}>
			<img src="https://picsum.photos/200"></img>
			<div className={styles.names}>
				<p className={styles.name}>Julian Andres Vargas arboleda</p>
				<p className={styles.user_name}>@julianvargas</p>
			</div>
			<div className={styles.icon}>
				<FontAwesomeIcon icon={faEllipsis} />
			</div>
		</button>
	);
}
