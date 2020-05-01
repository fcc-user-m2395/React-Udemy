import React, { Component } from "react";

import "./Todo.css";

class Todo extends Component {
  //props:todo,edit(),delete(),Toggle()
  //todo={task:,isDone:,id:,edit:}
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleEdit() {
    this.props.edit(this.props.todo.id);
  }
  handleDelete() {
    this.props.delete(this.props.todo.id);
  }
  handleToggle() {
    this.props.toggle(this.props.todo.id);
  }

  render() {
    const todo = this.props.todo;
    const todoClass = todo.isDone ? "Todo completed" : "Todo";
    return (
      <div className={todoClass}>
        <li className='Todo-task' onClick={this.handleToggle}>
          {todo.task}
        </li>
        <div className='Todo-buttons'>
          <button className='Todo-edit' onClick={this.handleEdit}>
            <i class='fas fa-pen' />
          </button>
          <button className='Todo-delete' onClick={this.handleDelete}>
            <i class='fas fa-trash' />
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
