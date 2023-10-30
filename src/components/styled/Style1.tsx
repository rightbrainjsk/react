import styled from "styled-components";

interface Iprops {
    primary?: boolean;
}

const StyledButton =
  styled.button <
  Iprops>`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: ${(props) => props.color || "gray"};
  background: white;
  ${(props) =>
    props.primary &&
    `
      font-weight:bold;
    `}
`;

const Style = () => {
  return (
    <>
      <h1>style예제 (styled-components)</h1>
      <div>$ npm i styled-components</div>
      <StyledButton>styled-components 버튼</StyledButton>
      <StyledButton color={"red"}>styled-components 버튼</StyledButton>
      <StyledButton primary>styled-components 버튼</StyledButton>
    </>
  );
};

export default Style;
