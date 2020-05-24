import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from './src/components/List';
import Global from './src/components/Global';
import Greeting from './src/components/Greeting';
import { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state={
      greeting:'Welcome'
    }
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titletext}>Data COVID-19 (Coronavirus) Indonesia dan Global</Text>
      <Text style={styles.Text}>Global</Text>
        <Global/>
      <Text style={styles.Text}>Indonesia </Text>
        <List/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  titletext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'brown'
  }
});

export default App;