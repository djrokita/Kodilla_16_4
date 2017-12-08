import React from 'react';

class TodoForm extends React.Component {
	render() {
		return (
			<div>
				<input 
					type='text' 
					value={this.props.value} 
					onChange={e => this.props.fill(e)}/>
				<button 
					type='submit' 
					onClick={() => this.props.submit(this.props.input)}>
					add task
				</button>
			</div>
		);
	}
};

export default TodoForm;