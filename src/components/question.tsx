import * as React from 'react';
import Slider from '@mui/material/Slider';

interface SliderMark {
    value: number
    label: string
}

const sliderMarks: SliderMark[] = [
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

interface QuestionProps {
    questionID: number
    questionText: string
    updateTotalScore: (questionID: number, newValue: number) => void
    allScoresArr: number[]
}

const Question: React.FC<QuestionProps> = ({ questionID, questionText, updateTotalScore, allScoresArr }) => {
    const [questionScore, setQuestionScore] = React.useState<number>(0)

    const calculateTotalScoreWithNewValue = (newValue: number) => {
        const updatedScores = [...allScoresArr]
        updatedScores[questionID] = newValue

        return updatedScores.reduce((sum, newValue) => sum + newValue, 0)
    }

    const onSliderChange = (_: Event, newValue: number | number[]): void => {
        let value = Array.isArray(newValue) ? newValue[0] : newValue
        const totalScoreWithNewValue = calculateTotalScoreWithNewValue(value)

        if (totalScoreWithNewValue > 10) {
            for (let i = value; i >= 0; i--) {
                if (calculateTotalScoreWithNewValue(i) <= 10) {
                    value = i
                    break
                }
            }
        }

        setQuestionScore(value)
        updateTotalScore(questionID, value)
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

export default Question