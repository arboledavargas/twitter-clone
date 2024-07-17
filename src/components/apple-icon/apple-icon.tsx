import appleLogoSrc from "../../assets/apple-logo.svg";
import styles from "./apple-icon.module.css";

export function AppleIcon(){
	return <img src={appleLogoSrc} className={styles.icon}/>
}