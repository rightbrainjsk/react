import { useState } from "react";

const Concat = () => {
  const [list, setList] = useState<(number | string)[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    console.log(typeof value);
    setList(list.concat(value));
    setValue("");
  };

  return (
    <>
      <h1>ES6예제 (Concat)</h1>
      <div>origin : {list.join(",")}</div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="추가하고싶은 값"
        style={{ width: "500px" }}
      />
      <button type="button" onClick={onClick}>
        Concat
      </button>
    </>
  );
};
export default Concat;
