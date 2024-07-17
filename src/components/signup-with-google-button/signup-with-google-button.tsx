import styles from "./signup-with-google-button.module.css";
import { GoogleIcon } from "../google-icon/google-icon";

export function SignUpWithGoogle({ onClick }:{onClick: () => void}){
	return <button className={styles.button} onClick={onClick}><GoogleIcon/>Sign up with Google</button>
}