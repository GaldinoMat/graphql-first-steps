import { gql } from 'apollo-server';

export const postTypesDefs = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    # user: User!
    indexRef: Int!
    createdAt: String!
  }
`;
