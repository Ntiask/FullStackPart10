import { FlatList, View, StyleSheet } from 'react-native';
//import RepositoryItem from './RepositoryItem';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from './graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  // eslint-disable-next-line no-unused-vars
  const {data, error, loading} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  const repositories = data ? data.repositories.edges.map(edge => edge.node): []
  console.log(data)

  
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      eyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;