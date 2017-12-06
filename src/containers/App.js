import React from "react";
import uuid from "uuid";
import style from './App.css';
import Title from "./../presentations/Title.js";
import TodoList from "./../presentations/TodoList.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
            id: 1,
            text: 'clean room'
        },
        {
            id: 2,
            text: 'wash the dishes'
        },
        {
            id: 3,
            text: 'feed my cat'
        }
      ]
    };
  }
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }
  removeTodo(id) {
    const remainder = this.state.data.filter((todo) => todo.id !== id);
    this.setState({ data: remainder });
    console.log('dupa');
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title counter={this.state.data.length} />
        <TodoList items={this.state.data} remove={this.removeTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
