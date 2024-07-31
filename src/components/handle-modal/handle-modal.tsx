import styles from './handle-modal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { ActionButton } from "../action-button/action-button";
import { HandleInput } from "../handle-input/handle-input";
import { useState } from "react";

export function HandleModal({ onComplete }:{ onComplete:(text: string) => void }){

	const [handle, setHandle] = useState<string | undefined>();

	function onCompleteHandler(){
		if(handle) {
			onComplete(handle);
		}
	}

	return <div className={styles.modalContainer}>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<FontAwesomeIcon icon={faXTwitter} className={styles.modalIcon}/>
				</div>
				<div className={styles.modalContent}>
					<h1 className={styles.modalTitle}>What should we call you?</h1>
					<span className={styles.modalSubtitle}>Your @username is unique. You can always change it later.</span>
					<HandleInput onChange={(value) => setHandle(value)}></HandleInput>
					<div className={styles.separator}></div>
					<ActionButton onClick={onCompleteHandler}>Sign Up</ActionButton>
				</div>
			</div>
		</div>
}