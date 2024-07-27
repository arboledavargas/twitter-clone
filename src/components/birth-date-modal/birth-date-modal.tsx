import styles from './birth-date-modal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { ActionButton } from "../action-button/action-button";
import { DateSelect	 } from "../date-select/dateSelect";
import { useState } from "react";

export function BirthDateModal({ onComplete }:{ onComplete: (birthDate: Date) => void }){

	const [birthDate, setBirthDate] = useState<Date | null>(null);

	function onCompleteHandler(){
		if(birthDate) {
			console.log('onCompleteHandler', birthDate)
			onComplete(birthDate);
		}
	}

	return <div className={styles.modalContainer}>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<FontAwesomeIcon icon={faXTwitter} className={styles.modalIcon}/>
				</div>
				<div className={styles.modalContent}>
					<h1 className={styles.modalTitle}>What's your birth date?</h1>
					<span className={styles.modalSubtitle}>This won't be public.</span>
					<DateSelect onChange={setBirthDate}></DateSelect>
					<p className={styles.modalTextDescription}>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. X may use your contact information, including your email address and phone number. for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads.
					Learn more. Others will be able to find you by email or phone number, when provided, unless you choose otherwise here.</p>
					<ActionButton onClick={onCompleteHandler}>Sign Up</ActionButton>
				</div>
			</div>
		</div>
}