import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QuestionsSet from "./components/questionsSet";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <QuestionsSet/>
  </React.StrictMode>
)