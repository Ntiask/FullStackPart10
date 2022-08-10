import React from 'react';
import { View, Image, StyleSheet, } from 'react-native';
import { Button } from 'react-native';

import Text from './Text';

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

const CardHeader = ({props}) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image style={cardHeaderStyles.avatar} source={props.item.ownerAvatarUrl} />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
            <Text fontWeight="bold" fontSize="subheading">{props.item.fullName}</Text>
            <Text color="textSecondary">{props.item.description}</Text>
            <View style={cardHeaderStyles.button}>
            <Button
            title={props.item.language}
            onPress={() => console.log('filter changed for example')}
            />
            </View>
      </View>
    </View>
  );
};

const cardBodyStyles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  }
});

const CardBody = ({props}) => {
  console.log(props)
  return (
    <View style={cardBodyStyles.container}>
    </View>
  );
};

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  actionTouchable: {
    flexGrow: 0,
  },
  text: 
    {
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
  
});

const CardFooterAction = ({ children,}) => {
  return (
      <View>
      <Text color="textSecondary" style={cardFooterStyles.actionText}>{children}</Text>
      </View>
      )
};

const CardFooter = ({props}) => {
  return (
    <View style={cardFooterStyles.container}>
      <CardFooterAction>
      <View style={cardFooterStyles.text}>
      <Text fontWeight="bold">{props.item.stargazersCount}</Text>
      <Text color="textSecondary"> Stars </Text>
      </View>
      </CardFooterAction>
      <CardFooterAction>
      <View style={cardFooterStyles.text}>
      <Text fontWeight="bold">{props.item.forksCount}</Text>
      <Text color="textSecondary"> Forks </Text>
      </View>
      </CardFooterAction>
      <CardFooterAction>
      <View style={cardFooterStyles.text}>
      <Text fontWeight="bold">{props.item.reviewCount}</Text>
      <Text color="textSecondary"> Reviews </Text>
      </View>
      </CardFooterAction>
      <CardFooterAction>
      <View style={cardFooterStyles.text}>
      <Text fontWeight="bold">{props.item.ratingAverage}</Text>
      <Text color="textSecondary"> Ratings </Text>
      </View>
      </CardFooterAction>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 20,
    backgroundColor:"white"
  },
});

const RepositoryItem = (props) => {
  return (
    <View style={cardStyles.container}>
      <CardHeader props={props} />
      <CardBody props={props} />
      <CardFooter props={props} />
    </View>
  );
};

export default RepositoryItem;