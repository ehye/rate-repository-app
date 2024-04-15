import React, { useState } from 'react'
import { TextInput, FlatList, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import useRepositories from '../hooks/useRepositories'
import RepositoryInfo from './RepositoryInfo'
import { ItemSeparator } from './ItemSeparator'

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const order = this.props.order
    const setOrder = this.props.setOrder
    const searchKeyword = this.props.searchKeyword
    const setSearchKeyword = this.props.setSearchKeyword

    return (
      <View
        style={{
          margin: 10,
        }}
      >
        <TextInput
          placeholder="Search"
          onChangeText={(query) => setSearchKeyword(query)}
          value={searchKeyword}
        />
        <Picker
          selectedValue={order}
          onValueChange={(itemValue) => setOrder(itemValue)}
        >
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item
            label="Highest rated repositories"
            value="highestRated"
          />
          <Picker.Item label="Lowest rated repositories" value="lowestRated" />
        </Picker>
      </View>
    )
  }

  render() {
    const onEndReach = this.props.onEndReach

    // Get the nodes from the edges array
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : []

    return (
      <View>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <RepositoryInfo item={item} />}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
        />
      </View>
    )
  }
}

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [order, setOrder] = useState('')
  const { repositories, fetchMore } = useRepositories({
    first: 7,
    order,
    searchKeyword,
  })
  const onEndReach = () => {
    // console.log('You have reached the end of the list')
    fetchMore()
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      onEndReach={onEndReach}
    />
  )
}

export default RepositoryList
