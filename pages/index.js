import Head from "next/head";
import style from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={style.backColor}>
      <div className={style.principal}>
      <h1>Antolina's Portfolio </h1>
      <h2>FullStack developer</h2>
      </div>
      <div className={style.division}>
        <div>
          <h3>Instructions:</h3>
          <h5>You can manage to terminal to get to know me</h5>
          <h5>if you wanna know what are enter 'ls' in the terminal</h5>
          <h5>cd 'option' to see the context</h5>
          <h5>p.e : cd Experience </h5>
          <h5>and you will be render to my experience page</h5>
          <h5>Try! its fun</h5>

          <h4>Warning!</h4>
          <h5>the commands are case-sensitive</h5>
        </div>
        <div>
          <h3>Terminal</h3>
          <div className={style.terminal}>
            <div className={style.terminalHead}>
              <p>antolina@antolina-portfolio</p>
            </div>
            <form className={style.colorLabel} action="api/redirect">
              <label>antolina@antolina-portfolio:~/</label>
              <input type="text" name="option" className={style.inputStyle}></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
