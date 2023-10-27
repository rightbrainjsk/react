import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Item from "./components/Item";

// 아래와 같이 type 지정
interface TList {
  id: string;
  message?: string;
}

function App() {
  const [list, setList] = useState<TList[]>([
    {
      id: uuidv4(),
    },
  ]);


  const insertHandler = () => {
    console.log("insertHandler");
    const item = { id: uuidv4() };
    setList([...list, item]);
  }

  const deletHandler = (id:string) => {
    console.log("deletHandler");
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <div>
        {/* 목록 */}
        {list.map((item, idx) => (
          <div key={item.id}>
            <button
              onClick={() => {
                deletHandler(item.id);
              }}
            >
              {idx + ":" + item.id}
            </button>
            <Item message="응애1" onClick={()=> console.log('응애에요!') } />
          </div>
        ))}
      </div>
      {/* 등록 */}
      <div className="enter">
        <input type="text" />
        <button
          type="button"
          onClick={() => {
            insertHandler();
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default App;
