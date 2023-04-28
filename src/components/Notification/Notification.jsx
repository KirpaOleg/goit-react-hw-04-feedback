import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = () => {
  return <p className={css.p}>There is no feedback</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;