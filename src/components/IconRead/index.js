import React from "react";
import PropTypes from "prop-types";
import checkedSvg from './../../assets/img/checked.svg';
import deliveredSvg from './../../assets/img/delivered.svg';

const IconRead = ({ isMe, isRead }) =>
  (isMe &&
    (isRead ? (
      <img className="message__icon-read" src={checkedSvg} alt="Read icon" />
    ) : (
      <img
        className="message__icon-read message__icon-read--no"
        src={deliveredSvg}
        alt="No read icon"
      />
    ))) ||
  null;

IconRead.propTypes = {
  isMe: PropTypes.bool,
  isRead: PropTypes.bool
};

export default IconRead;