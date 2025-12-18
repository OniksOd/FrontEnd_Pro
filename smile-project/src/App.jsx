import { Component } from "react";
import { Result, Buttons, Header, SmileItem } from "./components";

class App extends Component {
  definition = {
    1: "😊",
    2: "😂",
    3: "😍",
    4: "😎",
    5: "🤔",
  };
  state = {
    winner: null,
    shouldShowResult: false,
    votes: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
  };
  showResult = () => {
    const data = this.state.votes;
    let maxVotes = 0;
    let popular = null;
    for (let emoji in data) {
      if (data[emoji] > maxVotes) {
        maxVotes = data[emoji];
        popular = emoji;
      }
    }
    this.setState({ winner: popular, shouldShowResult: true });
  };
  resetVotes = () => {
    localStorage.clear();
    this.setState({ winner: null, votes: {} });
  };

  onItemClick = (id) => {
    this.setState(
      (prevState) => ({
        votes: {
          ...prevState.votes,
          [id]: (prevState.votes[id] || 0) + 1,
        },
      }),
      () => {
        localStorage.setItem("votes", JSON.stringify(this.state.votes));
      }
    );
  };
  componentDidMount() {
    const savedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    this.setState({ votes: savedVotes });
  }
  render() {
    const { winner, votes, shouldShowResult } = this.state;
    return (
      <div className="container">
        <Header />
        <div className="smilesContainer">
          {Object.entries(this.definition).map(([key, emoji]) => (
            <SmileItem
              key={key}
              emoji={emoji}
              id={key}
              count={votes[key] ?? 0}
              onClick={this.onItemClick}
            />
          ))}
        </div>
        <div className="buttonsField">
          <Buttons text="Show result" onClick={this.showResult} />
          <Buttons text="Reset" onClick={this.resetVotes} />
        </div>
        {shouldShowResult && (
          <Result emoji={this.definition[winner]} votes={votes[winner]} />
        )}
      </div>
    );
  }
}

export default App;
