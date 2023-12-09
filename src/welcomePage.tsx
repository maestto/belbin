import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>ТЕСТ БЕЛБИНА</h1>
            <h2>ОПРЕДЕЛИ СВОЮ РОЛЬ В КОМАНДЕ!</h2>
            <p>В каждой из семи частей данного теста распределите 10 баллов между 8 утверждениями. Если вы согласны с
                каким-либо утверждением на все 100%, вы можете отдать ему все 10 баллов.</p>
            <p>Рекомендуем распределять баллы 5/3/2 для достоверности результата.</p>
            <p>По результатам прохождения теста будет определена ваша роль в команде.</p>
            <button onClick={() => navigate('/questions')}>Приступить к тесту</button>
        </div>
    );
};

export default WelcomePage