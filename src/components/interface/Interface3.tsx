import type { Iprops } from "../../App";

interface ExtendsInterfaceProps extends Iprops {
  append: string;
}

const ex: ExtendsInterfaceProps[] = [
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

const Interface = () => {
  return (
    <>
      <h1>interface 예제 : extends</h1>
      <div>
        prop :
        {ex?.map((item) => (
          <div key={item.id}>
            {item.id}
            {item.message}
            {item.append}
          </div>
        ))}
      </div>
    </>
  );
};

export default Interface;
