import { ProfileImageCircle } from "../profile-image-circle/profile-image-circle";
import styles from "./tweet.module.css";
import { UserNameLink } from "../username-link/username-link";
import { Get_FeedQuery } from "../../gql/graphql";

type gqlTweet = Get_FeedQuery['feed']['edges'][number]['node']

export function Tweet({ data }: { data: gqlTweet }){

	return <div className={ styles.tweet }>
		<div className={ styles.styles }>
			<ProfileImageCircle></ProfileImageCircle>
		</div>
		<div className={ styles.content }>
			<div className={ styles.header }>
				<UserNameLink>{ data.author.name }</UserNameLink>
			</div>
		</div>
	</div>
}