import { useDispatch, useSelector } from "react-redux";

const Depth1 = () => {
	const val = useSelector((state: number) => state);
	const dispatch = useDispatch();
	return (
		<>
			<div>depth1-2 값 : {val}</div>
			<button
				type="button"
				onClick={() => {
					dispatch({ type: "증가" });
				}}
			>
				depth1 증가
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch({ type: "감소" });
				}}
			>
				depth1 감소
			</button>
		</>
	);
};

export default Depth1;
