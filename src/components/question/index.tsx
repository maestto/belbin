import * as React from 'react';
import { useSelector } from "react-redux";
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
    setID: number
    id: number
    children: string
    updateQuestionsSetState: (questionID: number, newValue: number) => void
}

const Question: React.FC<QuestionProps> = ({ setID, id, children, updateQuestionsSetState }) => {
    // @ts-ignore
    const score = useSelector(state => state.questionSet[setID].questionScores[id]) || 0

    const updateScore = (_: Event, value: number | number[]) => updateQuestionsSetState(id, value as number)

    return (
        <div>
            {children}
            <div>
                <Slider
                    data-testid="slider-testid"
                    size="small"
                    valueLabelDisplay="auto"
                    step={1}
                    marks={sliderMarks}
                    value={score}
                    onChange={updateScore}
                    min={0}
                    max={10}
                />
            </div>
        </div>
    )
}

export default Question