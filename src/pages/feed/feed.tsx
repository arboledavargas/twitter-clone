import { TweetCreator } from "../../components/tweet-creator/tweet-creator";
import styles from "./feed.module.css";
import { Tweet } from "../../components/tweet/tweet";

export function Feed(){
	return (
		<div className={styles.container}>
			<TweetCreator></TweetCreator>
			<Tweet></Tweet>
		</div>
	)
}