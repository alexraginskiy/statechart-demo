import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import statechart from './statechart';
statechart.start();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
