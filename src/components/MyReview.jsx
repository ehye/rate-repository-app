import { useState } from 'react'
import {
  Text,
  FlatList,
  View,
  Pressable,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native'
import { format, parseISO } from 'date-fns'
import useMyReviews from '../hooks/useMyReviews'
import useDeleteReview from '../hooks/useDeleteReview'
import { ItemSeparator } from './ItemSeparator'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewButton: {
    flexGrow: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 15,
  },
  deleteButton: {
    flexGrow: 1,
    backgroundColor: theme.colors.danger,
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
})

const MyReviewItem = ({ review, refetch }) => {
  const [error, setError] = useState('')
  const [deleteReview] = useDeleteReview()

  const onDelete = async (id) => {
    try {
      await deleteReview(id)
      refetch()
    } catch (error) {
      console.log(error)
      setError(error)
      setTimeout(() => {
        setError('')
      }, 5 * 1000)
    }
  }

  const handleDeleteButton = async (id) => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await onDelete(id)
          },
        },
      ]
    )
  }

  return (
    <View style={{ flexDirection: 'column', marginTop: '20px' }}>
      {/* <Text>{value.review.id}</Text> */}
      <View>
        <Text style={theme.inputError}>{error.message}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20px' }}>
        <Text style={theme.rating}>{review.rating}</Text>
        <View style={{ flexDirection: 'column', width: '75%' }}>
          <Text
            id={review.user.id}
            style={{ fontWeight: 'bold', marginBottom: '5px' }}
          >
            {review.user.username}/{review.repository.name}
          </Text>
          <Text>{format(parseISO(review.createdAt), 'P')}</Text>
          <Text id={review.id}>{review.text}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          style={styles.viewButton}
          onPress={() => Linking.openURL(review.repository.url)}
        >
          <Text style={{ color: 'white' }}>View repository</Text>
        </Pressable>
        <Pressable
          style={styles.deleteButton}
          onPress={() => handleDeleteButton(review.id)}
        >
          <Text style={{ color: 'white' }}>Delete review</Text>
        </Pressable>
      </View>
    </View>
  )
}

const MyReview = () => {
  const { reviews, loading, refetch, fetchMore } = useMyReviews({ first: 7 })

  if (loading) {
    return <Text>loading...</Text>
  }

  if (!loading && reviews) {
    const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []
    const onEndReach = () => {
      // console.log('You have reached the end of the list')
      fetchMore()
    }

    return (
      <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item: review }) => (
          <MyReviewItem review={review} refetch={refetch} />
        )}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    )
  }
}

export default MyReview
