import { PropTypes } from 'prop-types';
import { NotificationWrapper } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <NotificationWrapper>
      <p>{message}</p>
    </NotificationWrapper>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
