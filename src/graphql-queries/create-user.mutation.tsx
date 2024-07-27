import { graphql } from "../gql";

export const CREATE_USER = graphql(`
	mutation CreateUser($user: CreateUserInput!) {
		createUser(user: $user) {
			successfull
		}
	}
`)