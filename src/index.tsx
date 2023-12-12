import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import './index.css'
import WelcomePage from "./welcomePage"
import QuestionsPage from "./questionsPage"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/questions" element={<QuestionsPage/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)