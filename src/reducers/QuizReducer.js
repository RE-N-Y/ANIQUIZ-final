import {
	CHECK_ANSWER,
	RESET_QUIZ,
	SET_DECK,
	SET_MODE,
	SET_TIMER,
	COUNT_DOWN,
	STOP_TIMER,
	LIGHTBOX,
	SELECT_LIGHTBOX_IMAGE,
	SET_INDEX,
	SET_HINT,
	RESET_ANSWER,
	SET_HINT_NUM
} from './../actions/types';

const INITIAL_STATE = {
	selectedOptions: [],
	answer: null,
	correct: 0,
	wrong: 0,
	time: -1,
	deck: '',
	mode: '',
	question: '',
	title: '',
	selectedImage: null,
	index: 0,
	hint: false,
	hintNum: 5
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CHECK_ANSWER:
			if (action.payload) {
				return { ...state, answer: true, correct: state.correct+1}
			} else {
				return { ...state, answer: false, wrong: state.wrong+1}
			}
		case RESET_ANSWER:
			return { ...state, answer: null }
		case RESET_QUIZ:
			return { ...state, correct: 0, wrong: 0 }
		case SET_DECK:
			return { ...state, deck: action.payload }
		case SET_MODE:
			return { ...state, mode: action.payload }
		case COUNT_DOWN:
			if (state.time > 0) {
				return { ...state, time: state.time -1 }
			}
		case SET_TIMER:
			return { ...state, time: 180 }
		case STOP_TIMER:
			return { ...state, time: -1 }
		case LIGHTBOX:
			return { ...state, question: action.payload.question, title: action.payload.title }
		case SELECT_LIGHTBOX_IMAGE:
			return { ...state, selectedImage: action.payload }
		case SET_INDEX:
			return { ...state, index: action.payload }
		case SET_HINT:
			return { ...state, hint: action.payload }
		case SET_HINT_NUM:
			if (action.payload >= 0) {
				return { ...state, hintNum: action.payload }
			} else {
				return { ...state }
			}
		default:
			return state; 
	}
}