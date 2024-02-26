import React from 'react';
import './index.css';

const AppItem = (props) => {
  const { appsLiss } = props;
  const { appId, appName, imageUrl } = appsLiss;

  return (
    <li className="app">
      <div>
        <img className="image" id={appId} alt={appName} src={imageUrl} />
      </div>
      <div>
        <h1 className="text">{appName} </h1>
      </div>
    </li>
  );
};

export default AppItem;
