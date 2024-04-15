import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/query'

const useMyReviews = () => {
  const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true,
    },
    fetchPolicy: 'cache-and-network',
  })

  return { data, loading, refetch }
}

export default useMyReviews
