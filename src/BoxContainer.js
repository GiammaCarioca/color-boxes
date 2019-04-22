import React, { Component } from 'react';
import './BoxContainer.css';
import Box from './Box';

export default class BoxContainer extends Component {
	static defaultProps = {
		numBoxes: 6,
		allColors: ['magenta', 'orchid', 'violet', 'pink', 'plum', 'purple']
	};

	render() {
		const boxes = Array.from({ length: this.props.numBoxes }).map(() => <Box colors={this.props.allColors} />);
		return <div className="BoxContainer">{boxes}</div>;
	}
}
