import googleIconSrc from "../../assets/google-logo.svg";
import styles from "./google-icon.module.css";

export function GoogleIcon(){
	return <img src={googleIconSrc} className={styles.icon}></img>
}