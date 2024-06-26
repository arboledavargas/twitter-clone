import { graphql } from "../gql";

export const GET_FEED = graphql(`
	query Query($page: Int!, $pageSize: Int!) {
		feed(page: $page, pageSize: $pageSize) {
			id
			body
			createdAt
			retweetCount
			likeCount
			replyCount
			visibility
			type
		}
	}
`);