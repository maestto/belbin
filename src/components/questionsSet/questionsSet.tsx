import React from 'react';
import Question from "../question/question";

interface QuestionsSetProps {
    questionsArray: string[]
}

const QuestionsSet: React.FC<QuestionsSetProps> = ({questionsArray}) => {
    const [allScoresArr, setAllScoresArr] = React.useState<number[]>([])
    const [totalScore, setTotalScore] = React.useState<number>(0)

    const updateTotalScore = (questionID: number, questionScore: number): void => {
        const updatedScores: number[] = [...allScoresArr]
        updatedScores[questionID] = questionScore
        setAllScoresArr(updatedScores)

        setTotalScore(updatedScores.reduce((previousValue, currentValue) => previousValue + currentValue, 0))
    }

    return (
        <div>
            Использовано {totalScore} из 10
            {
                questionsArray.map((value, index) =>
                    <Question key={index} questionID={index} questionText={value} updateTotalScore={updateTotalScore} allScoresArr={allScoresArr}/>
                )
            }
        </div>
    )
}

export default QuestionsSet