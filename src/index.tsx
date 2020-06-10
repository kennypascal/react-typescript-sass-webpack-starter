import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './app/app';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function onLoad(): void {
  const container = document.createElement('div');
  container.id = 'root';
  document.body.appendChild(container);
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    container);
}

(function start(): void {
  const DOMContentLoaded = document.readyState === 'interactive';
  if (DOMContentLoaded) {
    onLoad();
  } else {
    document.addEventListener('DOMContentLoaded', onLoad);
  }
})();
