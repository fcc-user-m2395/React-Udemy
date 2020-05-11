import React, { Component } from "react";

import "./TodoForm.css";

class TodoForm extends Component {
  //mode,edit(),task,add
  constructor(props) {
    super(props);

    this.state = {
      task: this.props.mode === "new" ? "" : this.props.todo.task,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.mode === "new" ? this.handleAdd() : this.handleUpdate();
  }
  handleAdd() {
    let todo = { task: this.state.task };
    this.props.add(todo);
    this.setState({ task: "" });
  }
  handleUpdate() {
    let todo = { task: this.state.task, id: this.props.todo.id };
    this.props.update(todo);
    this.setState({ task: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    const buttonText = this.props.mode === "new" ? "Add Todo" : "Save";
    return (
      <form className={`TodoForm Todo-${this.props.mode}-form`}>
        {this.props.mode === "new" && <label htmlFor='task'>New Todo</label>}
        <input
          type='text'
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
          placeholder={this.props.mode === "new" ? "New Todo" : ""}
        />
        <button onClick={this.handleSubmit}>{buttonText}</button>
      </form>
    );
  }
}

export default TodoForm;
