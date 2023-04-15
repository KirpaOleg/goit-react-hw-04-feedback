import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <ul>
      <li>Good: {good} </li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad} </li>
      <li>Total: {total} </li>
      <li className={css.positive}>Positive feedback: {positivePercentage}% </li>
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