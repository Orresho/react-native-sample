import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert, FlatList, ScrollView } from 'react-native';
import randomData from "../../_config/random";
import { startTabs } from "./startMainTabs";

export default class Start extends React.Component {

  state = {
    count: 0,
    isLoading: true,
    dataSource: '',
  }

  insultList = [
    "You're such a looser",
    "You suck so bad",
    "I bet each tap represents times you ...",
    "The rate of not tapping correct is like 1 in 2,242,200, how shit are you wtf lol",
  ]

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  _handleRandomAlert = (id) => {
    const { count } = this.state;

    // set counter
    this.setState({ count: count + 1 })

    // Random generated Id between 1-6
    let randomId = Math.floor(Math.random() * (7 - 1) + 1);
    console.log('randomId', randomId)

    if (randomId === id) {
      count < 5 ? Alert.alert(
        "Master of gods!", 
        "You have passed the test with honor and can now continue to the dark side!",
        [
          {
            text: "Enter the dark side",
            onPress: () => startTabs(),
          }
        ],
        { cancelable: false }
        ) :
        count > 5 ? Alert.alert(
          "You're ok", 
          "You have passed but barely and can unfortunately continue to the dark side...",
          [
            {
              text: "Enter the dark side",
              onPress: () => startTabs(),
            }
          ],
          { cancelable: false }
          ) : null;

        // show modal with continue to next screen instead of alerts

      // reset counter
      this.setState({ count: count + 1 })
    } else {
      this.setState({ count: count + 1 })
      let random = Math.floor(Math.random() * (this.insultList.length - 1) + 1);
      console.log(this.insultList[random], random)
      
      return Alert.alert(this.insultList[random]);
    }

  }

  render() {
    console.log('testing debugger')
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {randomData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => this._handleRandomAlert(item.id)}>
            <Text
              style={[styles.general_styles, { color: item.color }]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}

        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    justifyContent: 'center',
  },

  general_styles: {
    fontWeight: 'bold',
    fontSize: 35,
  },
});
