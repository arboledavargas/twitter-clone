import { ProfileImageCircle } from "../profile-image-circle/profile-image-circle";
import styles from "./tweet.module.css";
import { UserNameLink } from "../username-link/username-link";

export function Tweet(){

	return <div className={ styles.tweet }>
		<div className={ styles.styles }>
			<ProfileImageCircle></ProfileImageCircle>
		</div>
		<div className={ styles.content }>
			<div className={ styles.header }>
				<UserNameLink>Nik</UserNameLink>
			</div>
		</div>
	</div>
}