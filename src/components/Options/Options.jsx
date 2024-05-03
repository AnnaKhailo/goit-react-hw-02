export default function Options({
  onUpdateFeedback,
  onResetFeedback,
  totalValue,
}) {
  return (
    <div>
      <button onClick={() => onUpdateFeedback("good")}>Good</button>
      <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
      {totalValue > 0 && <button onClick={onResetFeedback}>Reset</button>}
    </div>
  );
}
