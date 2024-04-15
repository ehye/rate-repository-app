import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/query'

function setOrderOpts(order) {
  switch (order) {
    case 'latest':
      return { orderBy: 'CREATED_AT', orderDirection: 'DESC' }
    case 'highestRated':
      return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' }
    case 'lowestRated':
      return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
    default:
      return { orderBy: 'CREATED_AT', orderDirection: 'DESC' }
  }
}

const useRepositories = (variables) => {
  const { order, searchKeyword, first } = variables
  const { orderBy, orderDirection } = setOrderOpts(order)
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables: {
      first,
      orderBy,
      orderDirection,
      searchKeyword,
    },
    fetchPolicy: 'cache-and-network',
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    repositories: data?.repositories,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  }
}

export default useRepositories
