import React, { Component } from 'react';
import WithDimensions from './WithDimensions';

class MinWidth extends Component {
	props: {
		width: number;
	};

	render() {
		console.log('MinWidth, dimensions: ', this.props.dimensions);
		const { width } = this.props.dimensions;
		return this.props.width <= width
			? this.props.children
			: null;
	}
}

export default WithDimensions(MinWidth);

