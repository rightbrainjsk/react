import styles from './Style3.module.css';



const Style = () => {
  return (
    <>
    <h1>style예제 (Import Style CSS)</h1>
    <div>파일명뒤에 .module을 꼭 넣자</div>
      <button className={styles.test}>버튼</button>
    </>
  );
};

export default Style;
