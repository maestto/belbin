import React from 'react';
import Question from "../question";
import {useDispatch, useSelector} from "react-redux"
import {updateQuestionScore} from "../../store";

interface QuestionsSetProps {
    id: number
    questionsArray: string[]
}

const QuestionSet: React.FC<QuestionsSetProps> = ({ id, questionsArray }) => {
    const dispatch = useDispatch()
    // @ts-ignore
    const totalScore = useSelector(state => state.questionSet[id].totalScore) || 0

    const updateQuestionsSetState = (questionID: number, newValue: number) => {
        dispatch(updateQuestionScore(id, questionID, newValue))
    }

    return (
        <div>
            ID = {id}.
            Использовано {totalScore} из 10
            {
                questionsArray.map((questionText, index) =>
                    <Question key={index} setID={id} id={index} updateQuestionsSetState={updateQuestionsSetState}>{questionText}</Question>
                )
            }
        </div>
    )
}

export default QuestionSet