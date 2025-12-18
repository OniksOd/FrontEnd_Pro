import { PureComponent } from "react";

export class Result extends PureComponent {
  render() {
    const { emoji, votes } = this.props;
    if (!emoji) return null;
    return (
      <div className="result">
        <h2>Winner Emoji: {emoji}</h2>
        <p>Votes: {votes}</p>
      </div>
    );
  }
}
