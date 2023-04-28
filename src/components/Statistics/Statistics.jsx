import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>Good: <span>{good}</span> </li>
      <li>Neutral: <span>{neutral}</span> </li>
      <li>Bad: <span>{bad}</span> </li>
      <li>Total: <span>{total}</span> </li>
      <li className={css.positive}>Positive feedback: <span>{positivePercentage}%</span> </li>
    </ul>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;