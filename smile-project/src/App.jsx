import { useState, useEffect, use } from "react";
import { Result, Buttons, Header, SmileItem } from "./components";

const definition = {
  1: "😊",
  2: "😂",
  3: "😍",
  4: "😎",
  5: "🤔",
};
export const App = () => {
  const [votes, setVotes] = useState(
    JSON.parse(localStorage.getItem("votes")) || {}
  );
  const [winner, setWinner] = useState(null);
  const [shouldShowResult, setShouldShowResult] = useState(false);

  useEffect(() => {
    console.log("Votes updated:", votes);
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const showResult = () => {
    const data = votes;
    let maxVotes = 0;
    let popular = null;
    for (let emoji in data) {
      if (data[emoji] > maxVotes) {
        maxVotes = data[emoji];
        popular = emoji;
      }
    }
    setWinner(popular);
    setShouldShowResult(true);
  };

  const resetVotes = () => {
    localStorage.clear();
    setVotes({});
    setWinner(null);
  };

  const onItemClick = (id) => {
    setVotes((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + 1,
    }));
  };

  return (
    <div className="container">
      <Header />
      <div className="smilesContainer">
        {Object.entries(definition).map(([key, emoji]) => (
          <SmileItem
            key={key}
            emoji={emoji}
            id={key}
            count={votes[key] ?? 0}
            onClick={onItemClick}
          />
        ))}
      </div>
      <div className="buttonsField">
        <Buttons text="Show result" onClick={showResult} />
        <Buttons text="Reset" onClick={resetVotes} />
      </div>
      {shouldShowResult && (
        <Result emoji={definition[winner]} votes={votes[winner]} />
      )}
    </div>
  );
};
