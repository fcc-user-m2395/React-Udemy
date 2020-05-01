import React, { Component } from "react";
import uuid from "uuid/dist/v4";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.displayBoxes = this.displayBoxes.bind(this);
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }
  addBox(box) {
    let newBox = { ...box, id: uuid() };
    this.setState((st) => ({ boxes: [...st.boxes, newBox] }));
  }
  removeBox(evt) {
    evt.persist();
    let boxes = this.state.boxes.filter((box) => box.id !== evt.target.name);
    this.setState({ boxes: boxes });
  }
  displayBoxes() {
    let boxes = this.state.boxes.map((box) => (
      <div className='BoxList-Box' key={uuid()}>
        <Box
          width={box.width}
          height={box.height}
          bgColor={box.bgColor}
          key={box.id}
          id={box.id}
        />
        <button name={box.id} onClick={this.removeBox}>
          Remove This Box
        </button>
      </div>
    ));
    return boxes;
  }

  render() {
    return (
      <div className='BoxList'>
        <NewBoxForm addBox={this.addBox} />
        {this.displayBoxes()}
      </div>
    );
  }
}

export default BoxList;
