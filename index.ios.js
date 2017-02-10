/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
	Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MediaQuery from './src/components/MediaQuery';

export default class RNMediaQuery extends Component {
  render() {
    return (
      <View style={styles.container}>
				<MediaQuery kind='max' width={375}>
					<Text style={styles.welcome}>
						Welcome to Portrait!
					</Text>
				</MediaQuery>
				<MediaQuery kind='min' width={376}>
					<Text style={styles.welcome}>
						Welcome to Landscape!
					</Text>
				</MediaQuery>
        <Text style={styles.instructions}>
					width: {Dimensions.get('window').width}px
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNMediaQuery', () => RNMediaQuery);
