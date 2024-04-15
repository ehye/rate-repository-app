import { gql } from '@apollo/client'

export const CREATE_REVIEW = gql`
  mutation createReview(
    $ownerName: String!
    $repositoryName: String!
    $rating: Int!
    $text: String
  ) {
    createReview(
      review: {
        ownerName: $ownerName
        repositoryName: $repositoryName
        rating: $rating
        text: $text
      }
    ) {
      id
    }
  }
`

export const SIGN_UP = gql`
  mutation ($user: CreateUserInput) {
    createUser(user: $user) {
      id
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`
