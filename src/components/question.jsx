import * as React from 'react';
import Slider from '@mui/material/Slider';

const sliderMarks = [
    { value: 0, label: '0', },
    { value: 1, label: '1', },
    { value: 2, label: '2', },
    { value: 3, label: '3', },
    { value: 4, label: '4', },
    { value: 5, label: '5', },
    { value: 6, label: '6', },
    { value: 7, label: '7', },
    { value: 8, label: '8', },
    { value: 9, label: '9', },
    { value: 10, label: '10', },
]

export default function Question({ questionID, questionText, updateTotalScore, allScoresArr }) {
    const [questionScore, setQuestionScore] = React.useState(0)

    const calculateTotalScoreWithNewValue = (newValue) => {
        const updatedScores = [...allScoresArr]
        updatedScores[questionID] = newValue

        return updatedScores.reduce((sum, newValue) => sum + newValue, 0)
    }

    const onSliderChange = (_, newValue) => {
        const totalScoreWithNewValue = calculateTotalScoreWithNewValue(newValue)

        if (totalScoreWithNewValue > 10) {
            for (let i = newValue; i >= 0; i--) {
                if (calculateTotalScoreWithNewValue(i) <= 10) {
                    newValue = i;
                    break;
                }
            }
        }

        setQuestionScore(newValue)
        updateTotalScore(questionID, newValue)
    }

    return (
        <div>
            {questionText}
            <div>
                <Slider
                    size="small"
                    valueLabelDisplay="auto"
                    step={1}
                    marks={sliderMarks}
                    value={questionScore}
                    onChange={onSliderChange}
                    min={0}
                    max={10}
                />
            </div>
        </div>
    )
}