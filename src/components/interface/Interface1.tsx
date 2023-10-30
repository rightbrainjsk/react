interface InterfaceProps {
  message?: string;
}
const Interface = ({ message }: InterfaceProps) => {
  return (
    <>
      <h1>interface 예제 : {message ? "props" : "props undefined"}</h1>
      <div>props : {message ? message : "undefined"}</div>
    </>
  );
};

export default Interface;