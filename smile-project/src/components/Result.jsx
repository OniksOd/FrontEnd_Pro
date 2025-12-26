export const Result = ({ emoji, votes }) => {
  if (!emoji) return null;
  return (
    <div className="result">
      <h2>Winner Emoji: {emoji}</h2>
      <p>Votes: {votes}</p>
    </div>
  );
};
