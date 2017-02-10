import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { View } from 'react-native';

export default function WithDimensions(ComponentClass) {
	return class extends Component {
		static displayName = `WithDimensions(${ComponentClass.displayName})`;

		constructor() {
			super();
			const dimensions = Dimensions.get('window');
			this.state = { dimensions };
		}

		onLayout = (event) => {
			const dimensions = Dimensions.get('window');
			this.setState(() => ({ dimensions }));
		}

		render() {
			return (
				<View onLayout={this.onLayout}>
					<ComponentClass dimensions={this.state.dimensions}/>
				</View>
			);
		}
	};
}

