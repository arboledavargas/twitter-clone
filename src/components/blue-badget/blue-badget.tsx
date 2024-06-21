import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import styles from "./blue-badget.module.css";

export function BlueBadget(){
	return <FontAwesomeIcon icon={ faCertificate } className={ styles.badget }/>
}