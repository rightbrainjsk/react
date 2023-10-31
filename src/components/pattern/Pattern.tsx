import imgA from "@assets/img.gif";
import imgB from "@assets/img2.gif";
const Mvc = () => {
  return (
    <>
      <h1>패턴 : MVC</h1>
      <div>
        <img src={imgA} />
      </div>
      <h1>패턴 : Flux</h1>
      <div>
        <img src={imgB} />
      </div>
    </>
  );
};

export default Mvc;
