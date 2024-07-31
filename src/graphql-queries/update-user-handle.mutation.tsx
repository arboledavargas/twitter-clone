import { graphql } from "../gql";

export const UPDATE_USER_HANDLE = graphql(`
	mutation UpdateUserHandle($handle: String!) {
  	updateUserhandle(handle: $handle) {
    	successfull
  	}
	}
`);