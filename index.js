import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './App';
import './index.css';
import reportWebVitals from './reportWebVitals'; // 追加

ReactDOM.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // 関数を呼び出す