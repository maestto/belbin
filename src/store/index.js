import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const defaultState = {
    questionSet: [
        { totalScore: 0, questionScores: [] },
        { totalScore: 0, questionScores: [] },
        { totalScore: 0, questionScores: [] },
        { totalScore: 0, questionScores: [] },
        { totalScore: 0, questionScores: [] },
        { totalScore: 0, questionScores: [] },
        { totalScore: 0, questionScores: [] }
    ]
}

const UPDATE_QUESTION_SCORE = "UPDATE_QUESTION_SCORE"

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_QUESTION_SCORE:
            const { setID, questionID, newValue } = action.payload
            const { questionSet } = state

            const updatedQuestionSet = [...questionSet]
            const updatedScores = [...updatedQuestionSet[setID].questionScores]
            updatedScores[questionID] = newValue
            updatedQuestionSet[setID].questionScores = updatedScores

            const totalScore = updatedScores.reduce((prev, curr) => prev + curr, 0)

            if (totalScore > 10) {
                return state //
            }

            updatedQuestionSet[setID].totalScore = totalScore

            return {
                ...state,
                questionSet: updatedQuestionSet,
            }

        default:
            return state
    }
}

export const updateQuestionScore = (setID, questionID, newValue) => ({type: UPDATE_QUESTION_SCORE, payload: {setID, questionID, newValue}})

export const store = createStore(
    reducer,
    composeWithDevTools(),
)