import { useMutation, useApolloClient } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutation'

const useCreateReview = () => {
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(CREATE_REVIEW)

  const createReview = async ({ ownerName, repoName, rating, review }) => {
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

  return [createReview, result]
}

export default useCreateReview
