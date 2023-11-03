import { Provider } from "react-redux";
import { createStore } from "redux";

const 체중 = 100;

interface Action {
	type: string;
}

function reducer(state = 체중, action: Action) {
	if (action.type === "증가") {
		state++;
		return state;
	} else if (action.type === "감소") {
		state--;
		return state;
	} else {
		return state;
	}
}

let store = createStore(reducer);

import Depth1 from "./components/depth1";
import Depth11 from "./components/depth1-1";
import Depth12 from "./components/depth1-2";

const Redux = () => {
	return (
		<>
			<Provider store={store}>
				<h1>Redux : 초보용 예제</h1>
				<div>Provider Wrap, reducer, useSelector, useDispatch</div>
				<Depth1></Depth1>
				<Depth11></Depth11>
				<Depth12></Depth12>
			</Provider>
		</>
	);
};

export default Redux;
