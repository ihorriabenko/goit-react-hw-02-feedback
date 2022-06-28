import s from './feedback-options.module.scss'

const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => (
  <div>
  <ul className={s.list}>
    <li className={s.item}>
      <button className={s.btn} type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
    </li>
    <li className={s.item}>
      <button className={s.btn} type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
    </li>
    <li className={s.item}>
      <button className={s.btn} type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </li>
  </ul>
  <h3 className={s.title}>Statistics</h3>
  </div>
);

export default FeedbackOptions;
