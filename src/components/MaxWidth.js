import React, { Component } from 'react';
import WithDimensions from './WithDimensions';

class MaxWidth extends Component {
	props: {
		width: number;
	};

	render() {
		console.log('MaxWidth, dimensions: ', this.props.dimensions);
		const { width } = this.props.dimensions;
		return this.props.width >= width
			? this.props.children
			: null;
	}
}

export default WithDimensions(MaxWidth);
