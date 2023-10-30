interface InsertProps {
  value: string;
  change?(): void;
  click?(): void;
}

const Insert = ({ value, change, click }: InsertProps) => {
  return (
    <div className="enter2">
      <input
        type="text"
        value={value}
        onChange={change}
        placeholder="할 일을 입력하세요"
      />
      <button
        type="button"
        onClick={click
        }
      >
        등록
      </button>
    </div>
  );
};

export default Insert;
