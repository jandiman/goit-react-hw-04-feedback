import PropTypes from 'prop-types';

export const Notifs = ({ message }) => {
  return <div>{message}</div>;
};

Notifs.propTypes = {
  message: PropTypes.string.isRequired,
};
