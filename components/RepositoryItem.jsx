import { Text, View, Image } from 'react-native'
import theme from '../theme'

const roundCount = (count) =>
  count >= 1000 ? (Math.round(count / 100) / 10).toString() + 'K' : count

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
      <Text>Stars: {roundCount(item.stargazersCount)} </Text>
      <Text>Forks: {roundCount(item.forksCount)} </Text>
      <Text>Reviews: {roundCount(item.reviewCount)} </Text>
      <Text>Rating: {roundCount(item.ratingAverage)} </Text>
    </View>
  </View>
)

export default RepositoryItem
