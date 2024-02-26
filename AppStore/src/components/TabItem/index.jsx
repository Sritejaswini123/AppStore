import React, { useState } from 'react';
import './index.css';

const TabItem = (props) => {
  const { tabsLiss, clickTabItem } = props;
  const { tabId, displayText } = tabsLiss;

  const [isSelected, setIsSelected] = useState(false);

  const onClickTabItem = () => {
    clickTabItem(tabId);
    setIsSelected(!isSelected); // Toggle the selected state on each click
  };

  return (
    <button onClick={onClickTabItem} className={`butt ${isSelected ? 'selected' : ''}`} type="button">
      <li key={tabId} value={tabId}>
        {displayText}
      </li>
    </button>
  );
};

export default TabItem;
