export const SmileItem = ({ id, emoji, count, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <div>
      <span className="smiles" onClick={handleClick}>
        {emoji}
      </span>
      <span className="count">{count}</span>
    </div>
  );
};
