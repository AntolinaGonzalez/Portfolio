import style from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={style.terminalSpace}>
      <h3 className={style.centerStyle}>Terminal</h3>
      <div className={style.terminalLitle}>
        <div className={style.terminalHeadLitle}>
          <p>antolina@antolina-portfolio</p>
        </div>
        <form className={style.colorLabel} action="api/redirect">
          <label>antolina@antolina-portfolio:~/</label>
          <input type="text" name="option" className={style.inputStyle}></input>
        </form>
      </div>
    </div>
  );
}
