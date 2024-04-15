import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          id
          ownerName
          name
          createdAt
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          openIssuesCount
          url
          ownerAvatarUrl
          description
          language
          userHasReviewed
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      url
      name
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      description
      forksCount
      language
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`

export const SIGN_IN = gql`
  mutation ($authenticateCredentials: AuthenticateInput) {
    authenticate(credentials: $authenticateCredentials) {
      accessToken
    }
  }
`

export const GET_CURRENT_USER = gql`
  query Me($includeReviews: Boolean = false, $first: Int, $after: String) {
    me {
      id
      username
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        totalCount
        edges {
          node {
            id
            repositoryId
            rating
            createdAt
            text
            repository {
              name
              url
            }
            user {
              id
              username
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
      reviewCount
    }
  }
`
