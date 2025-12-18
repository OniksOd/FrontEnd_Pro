import { Component } from "react";

export class Buttons extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <button className="btns" type="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}
