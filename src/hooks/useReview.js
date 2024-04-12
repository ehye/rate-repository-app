import { useMutation, useApolloClient } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutation'

const useReview = () => {
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(CREATE_REVIEW)

  const review = async ({ ownerName, repoName, rating, review }) => {
    const response = await mutate({
      variables: {
        ownerName: ownerName,
        repositoryName: repoName,
        text: review,
        rating: Number(rating),
      },
    })
    apolloClient.resetStore()
    return response
  }

  return [review, result]
}

export default useReview
