import { Text, View, Image, Pressable, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-dom'
import { roundCount } from '../utils/helper.js'
import theme from '../theme.js'

const styles = StyleSheet.create({
  languageTag: {
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginVertical: '1px',
    padding: '2px',
  },
})

const RepositoryInfo = ({ item }) => {
  const navigate = useNavigate()

  const onPress = (id) => {
    navigate(`/${id}`)
  }

  return (
    <View
      testID="repositoryItem"
      key={item.id}
      style={{ flexDirection: 'column', rowGap: 5 }}
    >
      <View style={{ padding: '10px', flexDirection: 'row' }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 4, marginRight: 15 }}
          resizeMode={'cover'}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={{ flexDirection: 'column', width: '85%' }}>
          <Pressable onPress={() => onPress(item.id)}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold' }}>{item.fullName}</Text>
              <Text style={{ marginLeft: '10px' }}>
                <span style={styles.languageTag}>{item.language}</span>
              </Text>
            </View>
            <Text>{item.description}</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          alignContent: 'center',
          flexDirection: 'row',
          marginBottom: '5px',
        }}
      >
        <View style={{ flexGrow: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <Text>{roundCount(item.stargazersCount)}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>Stars</Text>
          </View>
        </View>

        <View style={{ flexGrow: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <Text>{roundCount(item.forksCount)}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>Forks</Text>
          </View>
        </View>

        <View style={{ flexGrow: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <Text>{roundCount(item.reviewCount)}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>Reviews</Text>
          </View>
        </View>

        <View style={{ flexGrow: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <Text>{roundCount(item.ratingAverage)}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>Rating</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default RepositoryInfo
