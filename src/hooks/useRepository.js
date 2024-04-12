import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/query'

const useRepository = (id) => {
  const [repository, setRepository] = useState()
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: {
      repositoryId: id,
    },
    fetchPolicy: 'cache-and-network',
  })

  const fetchRepository = async () => {
    if (data) {
      setRepository(data.repository)
    }
  }

  useEffect(() => {
    fetchRepository()
  }, [loading, repository])

  return { repository: repository, loading, refetch: fetchRepository }
}

export default useRepository
