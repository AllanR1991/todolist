import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BlackBox } from './components/BlackBox/BlackBox';
import { TitleDate } from './components/TitleDate/TitleDate';
import { InputSearch } from './components/InputSearch/InputSearch';
import { Task } from './components/Task/Task';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className='main'>
      <BlackBox>
          <TitleDate/>
          <InputSearch/>
          <Task/>
      </BlackBox>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
