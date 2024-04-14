import { Text, FlatList, View } from 'react-native'
import { format, parseISO } from 'date-fns'
import useMyReviews from '../hooks/useMyReviews'
import { ItemSeparator } from './ItemSeparator'
import theme from '../theme'

const MyReviewItem = ({ review }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: '20px' }}>
      <Text style={theme.rating}>{review.rating}</Text>
      <View style={{ flexDirection: 'column', width: '75%' }}>
        <Text
          style={{ fontWeight: 'bold', marginBottom: '5px' }}
          id={review.user.id}
        >
          {review.user.username}/{review.repository.name}
        </Text>
        <Text>{format(parseISO(review.createdAt), 'P')}</Text>
        <Text id={review.id}>{review.text}</Text>
      </View>
    </View>
  )
}

const MyReview = () => {
  const { reviews, loading } = useMyReviews()

  if (loading) {
    return 'loading...'
  }

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []
  console.log(reviewNodes)

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <MyReviewItem review={item} />}
    />
  )
}

export default MyReview
