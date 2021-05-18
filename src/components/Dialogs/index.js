import React from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import { DialogItem } from "../";

import "./Dialogs.scss";

const { Search } = Input;

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialog, onSelectDialog }) => (
  <div className="dialog">
    <div className="dialog__search">
      <Search
        placeholder="Search"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy(items, ["created_at"], ["desc"]).map(item => (
        <DialogItem onSelect={onSelectDialog} 
          key={item._id} 
          isMe={item.author._id === userId}
          currentDialog={currentDialog}
          {...item} />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="No results"
      />
    )}
  </div>
);

export default Dialogs;