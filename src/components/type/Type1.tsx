import type { Ipros2 } from "../../App";

type TypeProps = Ipros2 & {
  append: string;
};

const ex: TypeProps[] = [
  {
    id: "1",
    message: "난 확장된1",
    append: "--난 확장된거야",
  },
  {
    id: "2",
    message: "난 확장된2",
    append: "---난 확장된거야",
  },
];

const Type = () => {
  return (
    <>
      <h1>
        Type 예제 : interface와 차이가 있으나 자세한건 인터넷 검색해보고
        interface를 주로 사용하자
      </h1>
      {ex?.map((item) => (
        <div key={item.id}>
          {item.id}
          {item.message}
          {item.append}
        </div>
      ))}
    </>
  );
};

export default Type;
