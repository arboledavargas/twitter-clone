import { useQuery } from "@apollo/client";
import { GET_FEED } from "../../graphql-queries";
import { Tweet } from "../../components/tweet/tweet";

export function ForYou(){

	const cursor = 'dsfds';
	const take = 10;

	const { data , loading, error } = useQuery(GET_FEED, {
		variables: { 
			take: take,
			from: cursor
		}
	});

	if(loading){
		return <p>Loading</p>
	}

	if(error){
		return <p>Error</p>
	}

	const tweetList = data?.feed.edges.map(tweet => <Tweet data={tweet.node} key={tweet.cursor}></Tweet>)

	return <>
	 {tweetList}
	</>
}