import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // js에서 css 추가하는 방법
import App from './App'; //app.js 파일을 추가하는 방법
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //index.html의 <div> 가져옴
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
