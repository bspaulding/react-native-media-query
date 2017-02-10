import React, { Component } from 'react';
import MaxWidth from './MaxWidth';
import MinWidth from './MinWidth';

const componentClassForKind = {
	min: MinWidth,
	max: MaxWidth
};

class MediaQuery extends Component {
	props: {
		kind: 'min' | 'max';
		width: number;
	};

	render() {
		const ComponentClass = componentClassForKind[this.props.kind];
		return <ComponentClass {...this.props} width={this.props.width}/>;
	}
}

export default MediaQuery;
