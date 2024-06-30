import { graphql } from "../gql";

export const GET_FEED = graphql(`
	query get_feed($take: Int!, $from: String) {
		feed(take: $take, from: $from) {
			edges {
				cursor
				node {
					id
					body
					author {
						name
						id
						avatarUrl
					}
					createdAt
					retweetCount
					likeCount
					replyCount
					visibility
					type
				}
			}
			pageInfo {
				endCursor
				hasNextPage
				hasPreviousPage
			}
		}
	}
`);