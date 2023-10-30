import type { Test } from "../App";

interface WrapProps {
  m?: Test;
}


const Wrap = ({m}: WrapProps) => {
  return (
      <>
          {m}
    </>
  );
};

export default Wrap;
