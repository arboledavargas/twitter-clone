/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation CreateTweet($body: String!, $visibility: Visibility!) {\n\t\tcreateTweet(tweet: { body: $body, visibility: $visibility }) {\n\t\t\ttweet {\n\t\t\t\tid\n\t\t\t\tbody\n\t\t\t\tcreatedAt\n\t\t\t\tretweetCount\n\t\t\t\tlikeCount\n\t\t\t\treplyCount\n\t\t\t\tvisibility\n\t\t\t\ttype\n\t\t\t}\n\t\t\tsuccessfull\n\t\t}\n\t}\n": types.CreateTweetDocument,
    "\n\tmutation CreateUser($uuid: String!) {\n\t\tcreateUser(uuid: $uuid) {\n\t\t\tsuccessfull\n\t\t}\n\t}\n\n": types.CreateUserDocument,
    "\n\tquery CurrentUser {\n\t\tcurrentUser {\n\t\t\tid\n\t\t\tname\n\t\t\thandle\n\t\t\temail\n\t\t\tbio\n\t\t\tlocation\n\t\t\tavatarUrl\n\t\t\tfollowersCount\n\t\t\tfollowingCount\n\t\t\tcreatedAt\n\t\t}\n\t}\n": types.CurrentUserDocument,
    "\n\tquery get_feed($take: Int!, $from: String) {\n\t\tfeed(take: $take, from: $from) {\n\t\t\tedges {\n\t\t\t\tcursor\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tbody\n\t\t\t\t\tauthor {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tid\n\t\t\t\t\t\tavatarUrl\n\t\t\t\t\t}\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tretweetCount\n\t\t\t\t\tlikeCount\n\t\t\t\t\treplyCount\n\t\t\t\t\tvisibility\n\t\t\t\t\ttype\n\t\t\t\t}\n\t\t\t}\n\t\t\tpageInfo {\n\t\t\t\tendCursor\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n\t\t}\n\t}\n": types.Get_FeedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateTweet($body: String!, $visibility: Visibility!) {\n\t\tcreateTweet(tweet: { body: $body, visibility: $visibility }) {\n\t\t\ttweet {\n\t\t\t\tid\n\t\t\t\tbody\n\t\t\t\tcreatedAt\n\t\t\t\tretweetCount\n\t\t\t\tlikeCount\n\t\t\t\treplyCount\n\t\t\t\tvisibility\n\t\t\t\ttype\n\t\t\t}\n\t\t\tsuccessfull\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateTweet($body: String!, $visibility: Visibility!) {\n\t\tcreateTweet(tweet: { body: $body, visibility: $visibility }) {\n\t\t\ttweet {\n\t\t\t\tid\n\t\t\t\tbody\n\t\t\t\tcreatedAt\n\t\t\t\tretweetCount\n\t\t\t\tlikeCount\n\t\t\t\treplyCount\n\t\t\t\tvisibility\n\t\t\t\ttype\n\t\t\t}\n\t\t\tsuccessfull\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateUser($uuid: String!) {\n\t\tcreateUser(uuid: $uuid) {\n\t\t\tsuccessfull\n\t\t}\n\t}\n\n"): (typeof documents)["\n\tmutation CreateUser($uuid: String!) {\n\t\tcreateUser(uuid: $uuid) {\n\t\t\tsuccessfull\n\t\t}\n\t}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery CurrentUser {\n\t\tcurrentUser {\n\t\t\tid\n\t\t\tname\n\t\t\thandle\n\t\t\temail\n\t\t\tbio\n\t\t\tlocation\n\t\t\tavatarUrl\n\t\t\tfollowersCount\n\t\t\tfollowingCount\n\t\t\tcreatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery CurrentUser {\n\t\tcurrentUser {\n\t\t\tid\n\t\t\tname\n\t\t\thandle\n\t\t\temail\n\t\t\tbio\n\t\t\tlocation\n\t\t\tavatarUrl\n\t\t\tfollowersCount\n\t\t\tfollowingCount\n\t\t\tcreatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery get_feed($take: Int!, $from: String) {\n\t\tfeed(take: $take, from: $from) {\n\t\t\tedges {\n\t\t\t\tcursor\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tbody\n\t\t\t\t\tauthor {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tid\n\t\t\t\t\t\tavatarUrl\n\t\t\t\t\t}\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tretweetCount\n\t\t\t\t\tlikeCount\n\t\t\t\t\treplyCount\n\t\t\t\t\tvisibility\n\t\t\t\t\ttype\n\t\t\t\t}\n\t\t\t}\n\t\t\tpageInfo {\n\t\t\t\tendCursor\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery get_feed($take: Int!, $from: String) {\n\t\tfeed(take: $take, from: $from) {\n\t\t\tedges {\n\t\t\t\tcursor\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tbody\n\t\t\t\t\tauthor {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tid\n\t\t\t\t\t\tavatarUrl\n\t\t\t\t\t}\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tretweetCount\n\t\t\t\t\tlikeCount\n\t\t\t\t\treplyCount\n\t\t\t\t\tvisibility\n\t\t\t\t\ttype\n\t\t\t\t}\n\t\t\t}\n\t\t\tpageInfo {\n\t\t\t\tendCursor\n\t\t\t\thasNextPage\n\t\t\t\thasPreviousPage\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;