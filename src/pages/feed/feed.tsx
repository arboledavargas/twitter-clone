import { TweetCreator } from "../../components/tweet-creator/tweet-creator";
import styles from "./feed.module.css";

export function Feed(){
	return (
		<div className={styles.container}>
			<TweetCreator></TweetCreator>
		</div>
	)
}