import { PureComponent } from "react";

export class SmileItem extends PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.id);
  };
  render() {
    const { emoji, count } = this.props;
    return (
      <div>
        <span className="smiles" onClick={this.handleClick}>
          {emoji}
        </span>
        <span className="count">{count}</span>
      </div>
    );
  }
}
