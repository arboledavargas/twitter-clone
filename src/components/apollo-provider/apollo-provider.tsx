import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ApolloProvider } from "@apollo/client";
import { useMemo } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function ApolloClientProvider({
	children,
}: {
	children: React.ReactNode;
}) {

	const { getAccessTokenSilently } = useAuth0();
	const client = useMemo(() => {
		const httpLink = createHttpLink({
			uri: import.meta.env.VITE_API_URL,
		});

		const authLink = setContext(async (_, { headers }) => {
			// get the authentication token from local storage if it exists
			const token = await getAccessTokenSilently();
			// return the headers to the context so httpLink can read them
			return {
				headers: {
					...headers,
					authorization: token ? `Bearer ${token}` : "",
				},
			};
		});

		return new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache(),
		});
	}, []);

	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
