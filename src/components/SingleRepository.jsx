import { FlatList, Text, View, Pressable, Linking } from 'react-native'
import { useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import useRepository from '../hooks/useRepository'
import RepositoryInfo from './RepositoryInfo'
import theme from '../theme'

const ReviewItem = ({ review }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: '20px' }}>
      <Text style={theme.rating}>{review.rating}</Text>
      <View style={{ flexDirection: 'column', width: '75%' }}>
        <Text
          style={{ fontWeight: 'bold', marginBottom: '5px' }}
          id={review.user.id}
        >
          {review.user.username}
        </Text>
        <Text>{format(parseISO(review.createdAt), 'P')}</Text>
        <Text id={review.id}>{review.text}</Text>
      </View>
    </View>
  )
}

const SingleRepository = () => {
  const { id } = useParams()
  const { repository: item } = useRepository(id)
  if (!item) {
    return 'Loading...'
  } else {
    const showGithubButton = item.url === '' ? false : true

    const reviewNodes = item.reviews
      ? item.reviews.edges.map((edge) => edge.node)
      : []

    return (
      <View>
        <FlatList
          data={reviewNodes}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => <RepositoryInfo item={item} />}
        />
        {showGithubButton && (
          <Pressable
            style={theme.button}
            onPress={() => Linking.openURL(item.url)}
          >
            <Text>
              <span style={{ color: '#ffffff' }}>Open in GitHub</span>
            </Text>
          </Pressable>
        )}
      </View>
    )
  }
}

export default SingleRepository
