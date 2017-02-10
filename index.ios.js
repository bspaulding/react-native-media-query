/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
	Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DetailView from './src/components/DetailView';

export default class RNMediaQuery extends Component {
  render() {
    return (
			<DetailView/>
    );
  }
}

AppRegistry.registerComponent('RNMediaQuery', () => RNMediaQuery);
