import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log(process.env);
