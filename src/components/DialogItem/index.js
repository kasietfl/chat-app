import React from 'react';
import classNames from 'classnames';
import { format, isToday } from 'date-fns'

import './DialogItem.scss';

import { IconRead, Avatar } from '../';

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
    onSelect }) => (
    <div className={classNames("dialog__item", {
        "dialog__item--online": user.isOnline,
        "dialog__item--selected": currentDialog === _id
    })}
    onClick={onSelect.bind(this, _id)}
    >
        <div className="dialog__item-avatar">
            <Avatar user={user} />
        </div>
        <div className="dialog__item-info">
            <div className="dialog__item-info-top">
                <b>{user.fullname}</b>
                <span>
                    {getMessageTime(created_at)}
                </span>
            </div>
            <div className="dialog__item-info-bottom">
                <p>{text}</p>
                {isMe && <IconRead isMe={true} isRead={true} />}
                {unread>0 && (<div className="dialog__item-info-bottom-count">
                    {unread > 9 ? "+9" : unread}
                </div>)}
            </div>
        </div>
    </div>
);

export default DialogItem;