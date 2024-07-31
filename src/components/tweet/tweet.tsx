import { ProfileImageCircle } from "../profile-image-circle/profile-image-circle";
import styles from "./tweet.module.css";
import { UserNameLink } from "../username-link/username-link";
import { Get_FeedQuery } from "../../gql/graphql";
import { CircleButtonTransparent } from '../circle-button-transparent/circle-button-transparent'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faRetweet } from "@fortawesome/free-solid-svg-icons";

type gqlTweet = Get_FeedQuery['feed']['edges'][number]['node']

function formatDate(dateString: string){
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function Tweet({ data }: { data: gqlTweet }){


	return <div className={ styles.tweet }>
		<div className={ styles.styles }>
			<ProfileImageCircle></ProfileImageCircle>
		</div>
		<div className={ styles.content }>
			<div className={ styles.header }>
				<UserNameLink>{ data.author.name }</UserNameLink>
				<span className={ styles.username }>@{ data.author.handle }</span>
				<span className={ styles.dot }>·</span>
				<span className={ styles.time }>{ formatDate(data.createdAt) }</span>
			</div>
			<div className={ styles.body }>
				{ data.body }
			</div>
			<div className={ styles.footer }>
					<CircleButtonTransparent count={data.replyCount}><FontAwesomeIcon icon={faComment} /></CircleButtonTransparent>
					<CircleButtonTransparent count={data.retweetCount}><FontAwesomeIcon icon={faRetweet} /></CircleButtonTransparent>
					<CircleButtonTransparent count={data.likeCount}><FontAwesomeIcon icon={faHeart} /></CircleButtonTransparent>
					<CircleButtonTransparent count={data.likeCount}><FontAwesomeIcon icon={faChartSimple} /></CircleButtonTransparent>
			</div>
		</div>
	</div>
}