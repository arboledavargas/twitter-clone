import { graphql } from "../gql/gql.ts";

export const GET_CURRENT_USER = graphql(`
	query CurrentUser {
		currentUser {
			id
			name
			handle
			email
			bio
			location
			avatarUrl
			followersCount
			followingCount
			createdAt
		}
	}
`);