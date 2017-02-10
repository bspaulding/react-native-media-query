/* @flow */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MediaQuery from './MediaQuery';
import WithDimensions from './WithDimensions';

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

const DimensionsDecription  = WithDimensions(({ dimensions }) => (
	<View>
		<Text style={styles.instructions}>
			width: {dimensions.width}px
		</Text>
		<Text style={styles.instructions}>
			height: {dimensions.height}px
		</Text>
		<Text style={styles.instructions}>
			scale: {dimensions.scale}
		</Text>
	</View>
));


const DetailView = () => (
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
		<DimensionsDecription />
	</View>
);

export default DetailView;
