const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h3>Statistics</h3>
    <ul>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>
      <li>
        <p>Bad:{bad}</p>
      </li>
      <li>
        <p>Total:{total}</p>
      </li>
      <li>
        <p>Positive feedback:{positivePercentage}&#37;</p>
      </li>
    </ul>
  </div>
);

export default Statistics;
