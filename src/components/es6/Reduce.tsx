import { useState } from "react";

const Reduce = () => {
  const [list] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [sum, setSum] = useState<number | null>();

  const process = () => {
    setSum(list.reduce((total: number, value: number) => (total += value), 0));
  };
  return (
    <>
      <h1>ES6예제 (Reduce)</h1>
      <div>origin : {list.join(",")}</div>
      <div>합 : {sum}</div>
      <button type="button" onClick={process}>
        SUM
      </button>
    </>
  );
};
export default Reduce;
