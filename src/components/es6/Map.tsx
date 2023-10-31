import { useState } from "react";

const Map = () => {
  const [list, setList] = useState(["홍길동", "개똥이", "홍홍홍"]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setList(list.map((item, index) => (index === i ? e.target.value : item)));
  };
  return (
    <>
      <h1>ES6예제 (Map)</h1>
      <h2>단순전개, useState값 설정</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <div>{item}</div>
            <input
              type="text"
              value={item}
              onChange={(e) => {
                onChange(e, index);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Map;
