import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import WelcomePage from "./welcomePage"
import QuestionsSet from "./components/questionsSet/questionsSet"

import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/questions" element={<QuestionsSet/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)