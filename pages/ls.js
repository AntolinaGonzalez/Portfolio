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
          <h1>Instrucctions:</h1>
          <h4>You can manage to terminal to get to know me</h4>
          <h4>if you wanna know what are enter 'ls' in the terminal</h4>
        </div>
        <div>
          <h1>Terminal</h1>
          <div className={style.terminal}>
            <div className={style.terminalHead}>
              <p>antolina@antolina-portfolio</p>
            </div>
            <p style={{color:"white"}}>antolina@antolina-portfolio:~$ ls</p>
            <div className={style.outputTerm}>
            <p>Experience</p>
            <p>Projects</p>
            <p>Skilss</p>
            <p>Education</p>
            <p>Contact</p>
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
