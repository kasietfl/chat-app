import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { messagesActions } from './../redux/actions';
import { Messages as BaseMessages } from "../components";

const Dialogs = ({ currentDialog, fetchMessages, items }) => {

  useEffect(() => {
    if(currentDialog) {
      fetchMessages(currentDialog)
    }
  },[currentDialog]);

  return (
    <BaseMessages items={items} />
  );
};

export default connect(({ dialogs, messages })=> ({
  currentDialog: dialogs.currentDialog, 
  items: messages.items
}), messagesActions)(Dialogs);