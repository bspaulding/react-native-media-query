import React, { Component } from 'react';
import WithDimensions from './WithDimensions';

class MaxWidth extends Component {
	props: {
		width: number;
	};

	render() {
		const { width } = this.props.dimensions;
		return this.props.width >= width
			? this.props.children
			: null;
	}
}

export default WithDimensions(MaxWidth);
