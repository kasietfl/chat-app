import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import { Time, IconRead, Avatar } from '../';

import './Message.scss';

const Message = ({
    avatar, 
    user, 
    text, 
    date, 
    attachment,
    isMe, 
    isRead, 
    isTyping}) => {
    return (
        <div 
            className={classNames('message', {
                'message--isme': isMe, 
                'message--is-typing': isTyping
            })}
        >
            <div className="message__content">
                <IconRead isMe={isMe} isRead={isRead} />
                <div className="message__avatar">
                    <Avatar user={user}/>
                </div>
                <div className="message__info">
                    {(text || isTyping) && (
                    <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && (<div className="message__typing">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>)}
                    </div>)}
                    { attachment && attachment.map(item => (
                        <div className="message__attachment">
                            <div className="message__attachment-item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        </div>
                    ))}
                    {date && (
                    <span className="message__date">
                        <Time date={date} />
                    </span>)}
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    attachment: propTypes.array,
    isMe: propTypes.bool,
    isRead: propTypes.bool,
    isTyping: propTypes.bool
};

export default Message;