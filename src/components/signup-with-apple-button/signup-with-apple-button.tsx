import styles from "./sign-up-with-apple-button.module.css";
import { AppleIcon } from "../apple-icon/apple-icon";
export function SignUpWithApple(){
	return <button className={styles.button}><AppleIcon/>Sign up with Apple</button>
}