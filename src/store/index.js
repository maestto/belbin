import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const defaultState = {
    totalScore: 0,
    questionScores: []
}

const UPDATE_QUESTION_SCORE = "UPDATE_QUESTION_SCORE"

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_QUESTION_SCORE:
            const updatedScores = [...state.questionScores]
            updatedScores[action.payload.questionID] = action.payload.newValue

            const totalScore = updatedScores.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
            if(totalScore > 10) return state // Refactoring

            return {
                ...state,
                totalScore: totalScore,
                questionScores: updatedScores
            }
        default:
            return state
    }
}

export const updateQuestionScore = (questionID, newValue) => ({type: UPDATE_QUESTION_SCORE, payload: {questionID, newValue}})

export const store = createStore(
    reducer,
    composeWithDevTools(),
)