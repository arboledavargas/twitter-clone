import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./cog-button.module.css";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export function CogButton(){
	return (
	<div className={styles.container}>
		<button className={styles.button}>
			<FontAwesomeIcon icon={faGear} />
		</button>
	</div>
	)
}