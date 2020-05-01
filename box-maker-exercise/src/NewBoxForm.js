import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: "",
      height: "",
      bgColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    console.log(evt);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    console.log(evt);
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({ width: "", height: "", bgColor: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='width'>Width</label>
          <input
            type='text'
            name='width'
            id='width'
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='height'>Height</label>
          <input
            type='text'
            name='height'
            id='height'
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='bgColor'>Color</label>
          <input
            type='text'
            name='bgColor'
            id='bgColor'
            value={this.state.bgColor}
            onChange={this.handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default NewBoxForm;
