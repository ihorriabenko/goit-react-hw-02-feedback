import PropTypes from 'prop-types';

import s from './feedback-options.module.scss'

const FeedbackOptions = ({good, neutral, bad, onLeaveFeedback }) => (
  <ul className={s.list}>
    <li key={good} className={s.item}>
      <button className={s.btn} type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
    </li>
    <li key={neutral} className={s.item}>
      <button className={s.btn} type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
    </li>
    <li key={bad} className={s.item}>
      <button className={s.btn} type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </li>
  </ul>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
