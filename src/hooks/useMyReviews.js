import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/query'

const useMyReviews = (variables) => {
  const { first } = variables
  const { data, loading, fetchMore, ...result } = useQuery(GET_CURRENT_USER, {
    variables: {
      first,
      includeReviews: true,
    },
    fetchPolicy: 'cache-and-network',
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    reviews: data?.me.reviews,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  }
}

export default useMyReviews
