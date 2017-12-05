import React from 'react';

const TodoList  = props => {
	let listItem = props.items.map(item => {
		return (
			<li key={item.id}>{item.text}</li>
		);
	}
	return (
		<ul>
			{listItem}
		</ul>
	);
};

export default TodoList;