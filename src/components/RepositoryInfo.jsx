import { FlatList, Text, View, Pressable, Linking } from 'react-native'
import { useParams } from 'react-router-dom'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'

const RepositoryInfo = () => {
  const { id } = useParams()
  const { repository: item } = useRepository(id)

  if (!item) {
    return 'Loading...'
  } else {
    const showGithubButton = item.url === '' ? false : true
    return (
      <View>
        <FlatList ListHeaderComponent={() => <RepositoryItem item={item} />} />
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

export default RepositoryInfo
