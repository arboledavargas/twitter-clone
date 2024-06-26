import { useQuery } from "@apollo/client";
import { GET_FEED } from "../../graphql-queries";
import { Tweet } from "../../components/tweet/tweet";

export function ForYou(){
	const { data , loading, error } = useQuery(GET_FEED);

	if(loading){
		return <p>Loading</p>
	}

	if(error){
		return <p>Error</p>
	}

	const tweetList = data?.feed.map(tweet => <Tweet></Tweet>)

	return <>
	 {tweetList}
	</>
}