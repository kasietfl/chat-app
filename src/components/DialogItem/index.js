import React, { useReducer } from 'react';
import classNames from 'classnames';

import './DialogItem.scss';

import { Time, IconRead } from '../';

const getAvatar = avatar => {
    if(avatar) {
        return (
            <img 
                src="https://consequenceofsound.net/wp-content/uploads/2019/05/pikachu-e1557247424342.jpg?quality=80" 
                alt="k"
            />
        )
    } else {
        //fkj
    }
}

const DialogItem = ({ user, message, unread }) => (
    <div className={classNames("dialog__item", {"dialog__item--online": user.isOnline})}>
        <div className="dialog__item-avatar">
            {/*<img src={user.avatar} alt={`${user.fullname} avatar`}/>*/}
            {getAvatar(
                "https://consequenceofsound.net/wp-content/uploads/2019/05/pikachu-e1557247424342.jpg?quality=80"
            )}
        </div>
        <div className="dialog__item-info">
            <div className="dialog__item-info-top">
                <b>Nurel</b>
                <span>
                    {/*<Time date = { new Date()}/>*/}
                    19:45
                </span>
            </div>
            <div className="dialog__item-info-bottom">
                <p>Don't tell everyone your plans, instead show them your results.</p>
                <IconRead isMe={true} isRead={true} />
                {unread>0 && (<div className="dialog__item-info-bottom-count">
                    {unread}
                </div>)}
            </div>
        </div>
    </div>
);

export default DialogItem;