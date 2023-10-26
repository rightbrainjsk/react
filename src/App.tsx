import { useState } from "react";
import "./App.css";


// 아래와 같이 type 지정
interface TList {
  id: number;
}

function App() {
  
  const [list, setList] = useState<TList[]>([
    {
      id: 0,
    },
    {
      id: 1,
    },
  ]);

  const insertHandler = () => {
    console.log("insertHandler");
    const item = {id: list.length}
    setList([...list, item]);
  }

  const deletHandler = (id:number) => {
    console.log("deletHandler");
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <div>
        {/* 목록 */}
        {list.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              deletHandler(item.id);
            }}
          >
            {item.id + ":"}
          </button>
        ))}
      </div>
      {/* 등록 */}
      <button
        type="button"
        onClick={() => {
          insertHandler();
        }}
      >
        등록
      </button>
    </div>
  );
}

export default App;
