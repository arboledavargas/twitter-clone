import { graphql } from "../gql";

export const CREATE_USER = graphql(`
	mutation CreateUser($uuid: String!) {
		createUser(uuid: $uuid) {
			successfull
		}
	}

`)