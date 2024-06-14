import styles from "./tweet-creator.module.css";
import { ProfileImageCircle } from "../profile-image-circle/profile-image-circle";
import { TextButton } from "../text-button/text-button";
import { CircleButton } from "../circle-button/circle-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDay,
	faFaceSmile,
	faImage,
	faListCheck,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { ActionButtonSmall } from "../action-button-small/action-button-small";
import { useMutation } from "@apollo/client";

import { CREATE_TWEET } from '../../graphql-queries'


export function TweetCreator() {

	const [  ] = useMutation(CREATE_TWEET);

	return (
		<div className={styles.container}>
			<div>
				<ProfileImageCircle></ProfileImageCircle>
			</div>
			<div>
				<textarea
					className={styles.textarea}
					placeholder="What is happening ?!"
				></textarea>
				<TextButton>Everyone can reply</TextButton>
				<div className={styles.line_separator}></div>
				<div className={styles.attachments_section}>
					<CircleButton>
						<FontAwesomeIcon icon={faImage} />
					</CircleButton>
					<CircleButton>
						<FontAwesomeIcon icon={faListCheck} />
					</CircleButton>
					<CircleButton>
						<FontAwesomeIcon icon={faFaceSmile} />
					</CircleButton>
					<CircleButton>
						<FontAwesomeIcon icon={faCalendarDay} />
					</CircleButton>
					<CircleButton>
						<FontAwesomeIcon icon={faLocationDot} />
					</CircleButton>
					<div className={styles.flex_space}></div>
					<ActionButtonSmall></ActionButtonSmall>

				</div>
			</div>
		</div>
	);
}