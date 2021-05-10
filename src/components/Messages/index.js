import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "../";

const Messages = ({ items }) => {
  return items ? (
    <div>
      {items.length > 0 ? (items.map(item => (
        <Message key={item._id} {...item} />
      ))): (
        <Empty description="No messages" style={{"opacity":0.4}} />
      )}
    </div>
  ) : (
    <Empty description="Start dialog" style={{"opacity":0.4}} />
  );
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;