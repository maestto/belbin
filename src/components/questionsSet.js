import React from 'react';
import Question from "./question";

const questionsData = [
    'Вопрос 1',
    'Вопрос 2',
    'Вопрос 3'
]

const QuestionsSet = () => {
    const [allScoresArr, setAllScoresArr] = React.useState([])
    const [totalScore, setTotalScore] = React.useState(0)

    const updateTotalScore = (questionID, questionScore) => {
        const updatedScores = [...allScoresArr]
        updatedScores[questionID] = questionScore
        setAllScoresArr(updatedScores)

        setTotalScore(updatedScores.reduce((sum, value) => sum + value, 0))
    }

    return (
        <div>
            Использовано {totalScore} из 10
            {
                questionsData.map((value, index) =>
                    <Question key={index} questionID={index} questionText={value} updateTotalScore={updateTotalScore} allScoresArr={allScoresArr}/>
                )
            }
        </div>
    )
}

export default QuestionsSet