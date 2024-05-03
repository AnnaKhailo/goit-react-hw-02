export default function Feedback({
  value: { good, neutral, bad },
  totalValue,
  positive,
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalValue}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
}
