import { graphql } from "../gql";

export const CREATE_TWEET = graphql(`
	mutation CreateTweet($body: String!, $visibility: Visibility!) {
		createTweet(tweet: { body: $body, visibility: $visibility }) {
			tweet {
				id
				body
				author {
					id
					name
				}
				createdAt
				retweetCount
				likeCount
				replyCount
				visibility
				type
			}
			successfull
		}
	}
`);
