import { useState, useCallback } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Item from "./components/Item";

// 아래와 같이 type 지정
interface TList {
  id: string;
  message?: string;
  checked: boolean;
}

function App() {
  const [list, setList] = useState<TList[]>([
    {
      id: uuidv4(),
      message: '초기값',
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
    setValue('');
  }
  // 삭제
  const deletHandler = (id:string) => {
    console.log("deletHandler");
    setList(list.filter(item => item.id !== id));
  };
  // 체크 토글
  const checkedHandler = (id:string) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item 
      )
    );
  };
  // 수정
  const editHandler = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setList(
      list.map((item) => (item.id === id ? { ...item, message: e.target.value } : item))
    );
  };

  return (
    <div className="App">
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
            <Item message="응애1" onClick={() => console.log("응애에요!")} />
          </div>
        ))}
      </div>
      {/* 등록 */}
      <div className="enter">
        <input
          type="text"
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
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
