import style from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={style.terminalSpace}>
      <div className={style.terminalLitle}>
        <p></p>
        <div className={style.terminalHeadLitle}>
          <p>antolina@Terminal</p>
        </div>
        <form className={style.colorLabel} action="api/redirect">
          <label>antolina@antolina-portfolio:~/</label>
          <input type="text" name="option" className={style.inputStyle}></input>
        </form>
      </div>
    </div>
  );
}
