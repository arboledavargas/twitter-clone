import styles from './handle-modal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { ActionButton } from "../action-button/action-button";
import { HandleInput } from "../handle-input/handle-input";

export function HandleModal(){
	return <div className={styles.modalContainer}>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<FontAwesomeIcon icon={faXTwitter} className={styles.modalIcon}/>
				</div>
				<div className={styles.modalContent}>
					<h1 className={styles.modalTitle}>What should we call you?</h1>
					<span className={styles.modalSubtitle}>Your @username is unique. You can always change it later.</span>
					<HandleInput></HandleInput>
					<div className={styles.separator}></div>
					<ActionButton>Sign Up</ActionButton>
				</div>
			</div>
		</div>
}