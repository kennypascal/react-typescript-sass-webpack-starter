import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

export default function onLoad(): void {
  const container = document.createElement('div');
  container.id = 'root';
  document.body.appendChild(container);
  ReactDOM.render(<App />, container);
}

(function start(): void {
  const DOMContentLoaded = document.readyState === 'interactive';
  if (DOMContentLoaded) {
    onLoad();
  } else {
    document.addEventListener('DOMContentLoaded', onLoad);
  }
})();
