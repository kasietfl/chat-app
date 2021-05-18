import React from 'react';
import classNames from 'classnames';
import { format, isToday } from 'date-fns'

import './DialogItem.scss';

import { IconRead, Avatar } from '..';

const getMessageTime = created_at => {
    if(isToday(created_at)) {
        return created_at;
    } else {
        return format(new Date(created_at), 'dd.MM.yyyy');
        
    }
};

const DialogItem = ({ 
    _id , 
    user, 
    unread, 
    created_at, 
    text, 
    currentDialog,
    isMe, 
    lastMessage,
    onSelect }) => (
    <div className={classNames("dialog__item", {
        "dialog__item--online": lastMessage.user.isOnline,
        "dialog__item--selected": currentDialog === _id
    })}
    onClick={onSelect.bind(this, _id)}
    >
        <div className="dialog__item-avatar">
            <Avatar user={lastMessage.user} />
        </div>
        <div className="dialog__item-info">
            <div className="dialog__item-info-top">
                <b>{lastMessage.user.fullname}</b>
                <span>
                    {getMessageTime(lastMessage.created_at)}
                </span>
            </div>
            <div className="dialog__item-info-bottom">
                <p>{lastMessage.text}</p>
                {isMe && <IconRead isMe={true} isRead={true} />}
                {lastMessage.undread>0 && (<div className="dialog__item-info-bottom-count">
                    {lastMessage.undread > 9 ? "+9" : lastMessage.undread}
                </div>)}
            </div>
        </div>
    </div>
);

export default DialogItem;