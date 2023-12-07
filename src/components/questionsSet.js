import React from 'react';
import Question from "./question";

const questionsData = [
    'Вопрос 1',
    'Вопрос 2',
    'Вопрос 3'
]

const QuestionsSet = () => {
    const [scoresArr, setScoresArr] = React.useState([])
    const [score, setScore] = React.useState(0)

    const updateScore = (questionID, questionScore) => {
        const updatedScores = [...scoresArr]
        updatedScores[questionID] = questionScore
        setScoresArr(updatedScores)

        let scoresSum = 0
        updatedScores.map((value) => scoresSum += value)
        setScore(scoresSum)
    }

    return (
        <div>
            Очков {score}/10
            {
                questionsData.map((value, index) =>
                    <Question questionID={index} questionText={value} updateScore={updateScore} totalScore={score}/>
                )
            }
        </div>
    )
}

export default QuestionsSet