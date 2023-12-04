import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Question from './components/question.jsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Question questionText={"Вопрос 1"}/>
  </React.StrictMode>
)