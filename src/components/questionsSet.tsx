import React from 'react';
import Question from "./question";

const questionsData: string[] = [
    'Вопрос 1',
    'Вопрос 2',
    'Вопрос 3'
]

const QuestionsSet: React.FC = () => {
    const [allScoresArr, setAllScoresArr] = React.useState<number[]>([])
    const [totalScore, setTotalScore] = React.useState<number>(0)

    const updateTotalScore = (questionID: number, questionScore: number): void => {
        const updatedScores: number[] = [...allScoresArr]
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