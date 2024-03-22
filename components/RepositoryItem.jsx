import { Text, View, Image } from 'react-native'
import theme from '../theme'

const RepositoryItem = ({ item }) => (
  <View key={item.id} style={{ flexDirection: 'column', rowGap: 5 }}>
    <View style={{ flexDirection: 'column' }}>
      <Image
        style={{ width: 50, height: 50, flex: 0.3 }}
        resizeMode={'cover'}
        src={item.ownerAvatarUrl}
      />
      <View style={{ columnGap: 5 }}>
        <Text>{item.fullName}</Text>
        <Text>{item.description}</Text>
        <Text>
          <span
            style={{
              backgroundColor: theme.colors.primary,
              color: '#ffffff',
              borderRadius: 4,
              padding: '0 4px 2px 4px',
            }}
          >
            {item.language}
          </span>
        </Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <Text>Stars: {item.stargazersCount} </Text>
      <Text>Forks: {item.forksCount} </Text>
      <Text>Reviews: {item.reviewCount} </Text>
      <Text>Rating: {item.ratingAverage} </Text>
    </View>
  </View>
)

export default RepositoryItem
