import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	render() {
		return (
			<div className={style.TodoForm}>
				<input 
					type='text' 
					value={this.props.value} 
					onChange={e => this.props.fill(e)}
					placeholder='type your task'/>
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