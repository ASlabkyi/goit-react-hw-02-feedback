import { PropTypes } from 'prop-types';
import { Notification } from './Notification/Notification';
import { StatisticsWrapper } from './Statistics.styled';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }

  return (
    <StatisticsWrapper>
      <h2>{title}</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p className="positive-feedback">
        Positive feedback: {positivePercentage}
      </p>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
