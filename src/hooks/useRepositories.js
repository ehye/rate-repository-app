import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/query'

const useRepositories = ({orderBy, orderDirection}) => {
  const [repositories, setRepositories] = useState()
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection,
    },
    fetchPolicy: 'cache-and-network',
  })

  const fetchRepositories = async () => {
    if (data) {
      setRepositories(data.repositories)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [loading, repositories])

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories
