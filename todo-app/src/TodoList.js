import React, { Component } from "react";
import uuid from "uuid/v4";
import ls from "local-storage";
import "./TodoList.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ls.get("todosArray") || [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.generateTodos = this.generateTodos.bind(this);
  }
  addTodo(todo) {
    const newTodo = { ...todo, id: uuid(), edit: false, isDone: false };
    const todos = [...this.state.todos, newTodo];
    this.setState({ todos: todos });
    ls.set("todosArray", todos);
  }
  deleteTodo(id) {
    let todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: todos });
    ls.set("todosArray", todos);
  }
  toggleTodo(id) {
    let todos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    this.setState({ todos: todos });
    ls.set("todosArray", todos);
  }
  editTodo(id) {
    let todos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, edit: true, isDone: false } : todo
    );
    this.setState({ todos: todos });
    ls.set("todosArray", todos);
  }
  updateTodo(changedTodo) {
    let todos = this.state.todos.map((todo) =>
      todo.id === changedTodo.id
        ? { ...todo, edit: false, task: changedTodo.task }
        : todo
    );
    this.setState({ todos: todos });
    ls.set("todosArray", todos);
  }
  generateTodos() {
    let todos = this.state.todos.map((todo) =>
      todo.edit ? (
        <li>
          <TodoForm
            mode={"edit"}
            key={`form-${todo.id}`}
            edit={this.updateTodo}
            todo={todo}
          />
        </li>
      ) : (
        <Todo
          key={todo.id}
          todo={todo}
          edit={this.editTodo}
          delete={this.deleteTodo}
          toggle={this.toggleTodo}
        />
      )
    );
    return todos;
  }

  render() {
    return (
      <div className='TodoList'>
        <h1>
          TODO APP <span>Get things done, one item at a time.</span>
        </h1>
        {this.state.todos.length === 0 && (
          <p className='emptyList'>Your Todo List is Empty</p>
        )}
        <ul className='TodoList-list'>{this.generateTodos()}</ul>
        <TodoForm mode={"new"} add={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
