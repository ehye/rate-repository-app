import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/query'

const useMyReviews = () => {
  const [reviews, setReviews] = useState()
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true,
    },
    fetchPolicy: 'cache-and-network',
  })

  const fetchRepositories = async () => {
    if (data) {
      // console.log(data);
      setReviews(data.me.reviews)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [loading, reviews])

  return { reviews, loading, refetch: fetchRepositories }
}

export default useMyReviews
