import React from 'react';

class Title extends React.Component {
	propTypes: {
			counter: React.PropTypes.number.isRequired
	}
	render() {
		return (
			<div>
				<h1>TODO Table</h1>
				<h3>Current tasks number: {this.props.counter}</h3>
			</div>
		);
	}
}

export default Title;