import { gql} from "@apollo/client";

export const GET_REPOSITORY_COUNT = gql`

query Repositories {
    repositories {
      totalCount
    }
  }
`;

export const GET_REPOSITORIES = gql`

query Repositories {
    repositories {
      edges {
        node {
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          url
          ownerAvatarUrl
          description
          language
          forksCount
        }
      }
    }
  }

`;

export const WHOAMI = gql`

query Query {
  me {
    username
  }
}

`;
