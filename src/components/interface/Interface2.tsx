import type { Iprops } from "../../App";

interface InterfaceProps {
  list?: Iprops[];
}
const Interface = ({ list }: InterfaceProps) => {
  return (
    <>
      <h1>interface 예제 : interface export import</h1>
      <div>
        prop :
        {list?.map((item) => (
          <div key={item.id}>
            {item.id}
            {item.message}
          </div>
        ))}
      </div>
    </>
  );
};

export default Interface;
