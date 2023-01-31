/*
 * @Author: Frank Chu
 * @Date: 2023-01-28 11:31:22
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-28 20:38:13
 * @FilePath: /fullstackopen/part2/lecture/src/index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
