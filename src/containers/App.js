import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "./../presentations/Title.js";
import TodoList from "./../presentations/TodoList.js";
import TodoForm from "./../presentations/TodoForm.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      input: ""
    };
  }
  addTodo(val) {
    if (this.state.input.length > 0) {
      const todo = {
        text: val,
        id: uuid.v4()
      };
      const data = [...this.state.data, todo];
      this.setState({ data });
      this.setState({
        input: ""
      });
    }
  }
  onChangeHandler(event) {
    let task = event.target.value;
    this.setState({
      input: task
    });
  }
  removeTodo(id) {
    const remainder = this.state.data.filter((todo) => todo.id !== id);
    this.setState({ data: remainder });
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title counter={this.state.data.length} />
        <TodoList items={this.state.data} remove={this.removeTodo.bind(this)} />
        <TodoForm
          input={this.state.input}
          submit={this.addTodo.bind(this)}
          fill={this.onChangeHandler.bind(this)}
          value={this.state.input}
        />
      </div>
    );
  }
}

export default App;
