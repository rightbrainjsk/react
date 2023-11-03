import { useReducer } from "react";

const initialState = {
	number: 0,
};
interface State {
	number: number;
}
interface Action {
	type: string;
}
// Dispatch
function reducer(state: State, action: Action) {
	switch (action.type) {
		case "ADD":
			return {
				number: state.number + 1,
			};
		case "MINUS":
			return {
				number: state.number - 1,
			};
		default:
			return state;
	}
}

const Redux = () => {
	// Store
	const [state, dispatch] = useReducer(reducer, initialState);
	// Action
	const onAdd = () => {
		dispatch({ type: "ADD" });
	};
	const onMinus = () => {
		dispatch({ type: "MINUS" });
	};
	return (
		<>
			<h1>패턴 : Flux (예제)</h1>
			<div>
				Action → Dispatch → Store → View 순서로 데이터가 단방향으로
				흐른다.(Flux)
			</div>
			<div>
				{/* View */}
				<div>View : {state.number}</div>
				<button onClick={onAdd}>Add</button>
				<button onClick={onMinus}>Minus</button>
			</div>
		</>
	);
};

export default Redux;
