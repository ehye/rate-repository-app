import { useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import useRepositories from '../hooks/useRepositories'
import RepositoryInfo from './RepositoryInfo'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e5e8',
  },
})

export const RepositoryListContainer = ({ order, setOrder, repositories }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const ItemSeparator = () => <View style={styles.separator} />

  const OrderingOpt = () => (
    <View>
      <Picker
        selectedValue={order}
        onValueChange={(itemValue) => setOrder(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highestRated" />
        <Picker.Item label="Lowest rated repositories" value="lowestRated" />
      </Picker>
    </View>
  )

  return (
    <FlatList
      ListHeaderComponent={OrderingOpt}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryInfo item={item} />}
    />
  )
}

function setOrderOpts(order) {
  switch (order) {
    case 'latest':
      return { orderBy: 'CREATED_AT', orderDirection: 'DESC' }
    case 'highestRated':
      return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' }
    case 'lowestRated':
      return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
    default:
      return { orderBy: 'CREATED_AT', orderDirection: 'DESC' }
  }
}

const RepositoryList = () => {
  const [order, setOrder] = useState('')
  const { repositories } = useRepositories(setOrderOpts(order))

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
    />
  )
}

export default RepositoryList
