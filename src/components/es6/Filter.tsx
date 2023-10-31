import { useState } from "react";

const Filter = () => {
  const [list, setList] = useState<string[]>([
    "홍길동",
    "개똥이",
    "지워질거야",
    "잘가라~",
    "키키",
    "키키",
    "키키",
  ]);

  const deletHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    setList(
      list.filter(function (_, i) {
        return i !== index;
      })
    );
  };
  return (
    <>
      <h1>ES6예제 (filter)</h1>
      <h2>loop후 return하지 않은 값을 제거</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            click하면 delete :
            <button
              type="button"
              onClick={(e) => {
                deletHandler(e, index);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Filter;
