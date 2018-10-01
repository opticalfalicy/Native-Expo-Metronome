import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './components/Main.js';
import Time from './components/Time';
import Bpm from './components/Bpm';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Main style={styles.main}/>
        </View>
        <View style={styles.bottomView}>
          {/* <Time style={styles.time}/> */}
          <Bpm />
          {/* <Text style={styles.maincolor}>Open up App.js to start working on your app!</Text> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomView: {
    width: 200,
    height: 150,
  }
});
