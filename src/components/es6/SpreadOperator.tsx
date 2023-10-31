import { useState } from "react";

const SpreadOpertor = () => {
  const [array, setArray] = useState<string[]>(["홍길동", "개똥이"]);
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onAppend = () => {
    setArray([...array, value]);
    setValue("");
  };
  return (
    <>
      <h1>ES6예제 (SpreadOpertor ...) </h1>
      <p>array : [{array.join(",")}]</p>
      <div>
        <input type="text" value={value} onChange={onChange} />
        <button type="button" onClick={onAppend}>
          추가
        </button>
      </div>
    </>
  );
};
export default SpreadOpertor;
