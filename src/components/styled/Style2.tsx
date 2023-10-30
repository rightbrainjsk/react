
const StyledButton = {
    border: '1px dashed red',
    padding: '10px',
}

const Style = () => {
  return (
    <>
      <h1>style예제 (inline style css)</h1>
      <button style={StyledButton}>버튼</button>
      <button
        style={{
          border: "1px dashed red",
          padding: "10px",
        }}
      >
        버튼
      </button>
    </>
  );
};

export default Style;
