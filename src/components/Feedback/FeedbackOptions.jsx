import React from 'react';

const FeedbackOptions = ({
  handleIncrementGood,
  handleIncrementBad,
  handleIncrementNeutral,
}) => (
  <ul>
    <li><button type="button" onClick={handleIncrementGood}>
      Good
    </button></li>
    <li><button type="button" onClick={handleIncrementNeutral}>
      Neutral
    </button></li>
    <li><button type="button" onClick={handleIncrementBad}>
      Bad
    </button></li>
  </ul>
);

export default FeedbackOptions
