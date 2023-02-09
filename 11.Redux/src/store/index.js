import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
	if (action === "increment") {
		return {
			counter: state.action + 1,
		};
	}
	if (action === "decrement") {
		return {
			counter: state.action - 1,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
