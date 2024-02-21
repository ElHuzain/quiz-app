import { createStore } from "redux";

const init_state = {
    currentQuestion: 0,
    userAnswers: [],
    started: false,
    finished: false,
}

const reducer = (state = init_state, action) => {

    switch (action.type) {

        case "ADD_ANSWER": return {
            ...state,
            currentQuestion: state.currentQuestion + 1,
            userAnswers: [...state.userAnswers, action.payload]
        };

        case "START": return {
            ...state,
            started: true,
        }

        case "FINISH": return {
            ...state,
            finished: true
        }

        case "RESET": return init_state

        default: return state;

    }
}

const store = createStore(reducer);

export default store;