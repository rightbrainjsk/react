import styles from "./Style4.module.scss";

const Style = () => {
  return (
    <>
      <h1>style예제 (Import Style SCSS)</h1>
      <div>pnpm add -D sass</div>
      <div>
        <a href="https://sass-lang.com/" target="_blank">
          sass-lang.com 새창
        </a>
      </div>
      <button className={styles.test}>
        버튼<span></span>
      </button>
      sass-lang.com
    </>
  );
};

export default Style;
