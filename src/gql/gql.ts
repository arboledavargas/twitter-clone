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
    "\n\tquery Query($page: Int!, $pageSize: Int!) {\n\t\tfeed(page: $page, pageSize: $pageSize) {\n\t\t\tid\n\t\t\tbody\n\t\t\tcreatedAt\n\t\t\tretweetCount\n\t\t\tlikeCount\n\t\t\treplyCount\n\t\t\tvisibility\n\t\t\ttype\n\t\t}\n\t}\n": types.QueryDocument,
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
export function graphql(source: "\n\tquery Query($page: Int!, $pageSize: Int!) {\n\t\tfeed(page: $page, pageSize: $pageSize) {\n\t\t\tid\n\t\t\tbody\n\t\t\tcreatedAt\n\t\t\tretweetCount\n\t\t\tlikeCount\n\t\t\treplyCount\n\t\t\tvisibility\n\t\t\ttype\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Query($page: Int!, $pageSize: Int!) {\n\t\tfeed(page: $page, pageSize: $pageSize) {\n\t\t\tid\n\t\t\tbody\n\t\t\tcreatedAt\n\t\t\tretweetCount\n\t\t\tlikeCount\n\t\t\treplyCount\n\t\t\tvisibility\n\t\t\ttype\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;