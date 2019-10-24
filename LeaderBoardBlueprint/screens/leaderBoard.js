import React from 'react';
import {
  FlatList,
  View,
  Image,
} from 'react-native';
import { withStyles, Text, Avatar } from 'react-native-ui-kitten';
import { data } from '../../../data';

const moment = require('moment');

class _LeaderBoard extends React.Component {
  static navigationOptions = {
    title: 'Leader Board',
  };

  state = {
    data: data.getUsers(),
  };

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item, index }) => {
    return (
    <View style={this.props.themedStyle.container}>
      <View style={this.props.themedStyle.rank}>
        <Text category='h6' style={this.props.themedStyle.text}>{`${index + 1}. `}</Text>
      </View>
      <Avatar source={item.photo} size='giant' style={this.props.themedStyle.avatar}/>

      <View style={this.props.themedStyle.content}>
        <View style={this.props.themedStyle.mainContent}>
          <View style={this.props.themedStyle.text}>
            <Text>
              <Text category='s1' style={this.props.themedStyle.text}>{`${item.firstName} ${item.lastName}`}</Text>
            </Text>
          </View>
          <Text
          category='c1' appearance='hint' style={this.props.themedStyle.textTime}>{`Point: ${10000 - (index * 500)}`}
          </Text>
        </View>
      </View>
    </View>
  )};

  render = () => (
    <FlatList
      style={this.props.themedStyle.root}
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
    />
  );
}

export default LeaderBoard = withStyles(_LeaderBoard, theme => ({

  root: {
    backgroundColor: theme['color-basic-100'],
    // marginTop: 20,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: theme['color-basic-400'],
    alignItems: 'flex-start',
  },
  avatar: {

  },
  
  text: {
    marginBottom: 5,
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 5,
  },
  img: {
    height: 50,
    width: 50,
    margin: 0,
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50,
  },
  text: {
    color: theme['color-basic-1000']
  },
  textTime: {
    color: theme['color-basic-600'],
    marginTop: 5,
  },
  rank:{
    marginRight: 16,
    justifyContent: 'center',
    height: 50
  }
}));
