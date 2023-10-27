interface ItemProps{
    message?: string;
    onClick?(): void;
}

const Item = ({ message, onClick }: ItemProps) => {
  return (
    <button type="button" onClick={onClick}>
      {message}
    </button>
  );
};

export default Item;