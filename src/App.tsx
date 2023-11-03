import Interface1 from "./components/interface/Interface1";
import Interface2 from "./components/interface/Interface2";
import Interface3 from "./components/interface/Interface3";
export interface Iprops {
	id: string;
	message?: string;
}
const test: Iprops[] = [
	{
		id: "1",
		message: "1번이다",
	},
	{
		id: "2",
		message: "2번이다",
	},
	{
		id: "3",
	},
];
export type Ipros2 = {
	id: string;
	message?: string;
};
import Type1 from "./components/type/Type1";
import Style1 from "./components/styled/Style1";
import Style2 from "./components/styled/Style2";
import Style3 from "./components/styled/Style3";
import Style4 from "./components/styled/Style4";
import SpreadOpertor from "./components/es6/SpreadOperator";
import Map from "./components/es6/Map";
import Filter from "./components/es6/Filter";
import Reduce from "./components/es6/Reduce";
import Concat from "./components/es6/Concat";
import Pattern from "./components/pattern/Pattern";
import Mvc from "./components/pattern/Mvc";
import Flux from "./components/pattern/Flux";
import Redux1 from "./components/redux/Redux1";

import { useState, useCallback } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Item from "./components/Item";
import Wrap from "./components/Wrap";
import Insert from "./components/Insert";

// 아래와 같이 type 지정
export interface TList {
	id: string;
	message?: string;
	checked: boolean;
}

export interface Test {
	message?: string;
}

function App() {
	const [list, setList] = useState<TList[]>([
		{
			id: uuidv4(),
			message: "초기값",
			checked: false,
		},
	]);
	const [value, setValue] = useState("");
	// 입력
	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);

	// 등록
	const insertHandler = () => {
		console.log("insertHandler");
		const item = { id: uuidv4(), message: value, checked: false };
		setList([...list, item]);
		setValue("");
	};
	// 삭제
	const deletHandler = (id: string) => {
		console.log("deletHandler");
		setList(list.filter((item) => item.id !== id));
	};
	// 체크 토글
	const checkedHandler = (id: string) => {
		setList(
			list.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
			)
		);
	};
	// 수정
	const editHandler = (
		id: string,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setList(
			list.map((item) =>
				item.id === id ? { ...item, message: e.target.value } : item
			)
		);
	};

	return (
		<div className="App">
			{/* interface */}
			<Interface1 message="props"></Interface1>
			<Interface1></Interface1>
			<Interface2 list={test}></Interface2>
			<Interface3></Interface3>
			<Type1></Type1>
			<Style1></Style1>
			<Style2></Style2>
			<Style3></Style3>
			<Style4></Style4>
			<SpreadOpertor></SpreadOpertor>
			<Map></Map>
			<Filter></Filter>
			<Reduce></Reduce>
			<Concat></Concat>
			<Pattern></Pattern>
			<Mvc></Mvc>
			<Flux></Flux>
			<Redux1></Redux1>
			<hr />

			<div>
				{/* 목록 */}
				{list.map((item) => (
					<div key={item.id}>
						<label htmlFor={item.id}>수정모드</label>
						<input
							id={item.id}
							type="checkbox"
							checked={item.checked}
							onChange={() => {
								checkedHandler(item.id);
							}}
						/>
						<div>
							{!item.checked ? (
								item.message
							) : (
								<input
									type="text"
									value={item.message}
									onChange={(e) => {
										editHandler(item.id, e);
									}}
								/>
							)}
						</div>
						<button
							type="button"
							onClick={() => {
								deletHandler(item.id);
							}}
						>
							삭제
						</button>
						<Item
							message="응애1"
							onClick={() => console.log("응애에요!")}
						/>
					</div>
				))}
			</div>

			<Wrap m={"te111st"}></Wrap>
			{/* 등록 */}
			<Insert
				value={value}
				change={onChange}
				click={insertHandler}
			></Insert>
		</div>
	);
}

export default App;
