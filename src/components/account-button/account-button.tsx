import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./account-button.module.css";
import { useAuth0 } from "@auth0/auth0-react";


export function AccountButton() {

	const { logout } = useAuth0();

	function handleClick(){
		logout({
      logoutParams: {
        returnTo: window.location.origin + '/login',
      },
    })
	}

	return (
		<button className={styles.button} onClick={handleClick}>
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
