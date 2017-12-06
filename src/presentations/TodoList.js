import React from "react";
import style from "./TodoList.css";

const TodoList = (props) => {
  let listItem = props.items.map((item) => {
    return (
      <li key={item.id} onClick={() => props.remove(item.id)}>
        {item.text}
      </li>
    );
  });
  return <ul className={style.TodoList}>{listItem}</ul>;
};

export default TodoList;
