import style from "../styles/Home.module.css";
import Instructions from "../components/instructions";
import Header  from "../components/header";

export default function Ls() {
  return (
    <div className={style.backColor}>
      <Header></Header>
      <div>
        <div className={style.right}>
          <Instructions></Instructions>
        </div>
        <div className={style.terminalSpace} className={style.centerPage}>
          <div className={style.terminal}>
            <div className={style.terminalHead}>
              <p className={style.centerStyle}>antolina@Terminal</p>
            </div>
            <p style={{ color: "white", margin: 0, marginLeft: "10px" }}>
              antolina@antolina-portfolio:~$ ls
            </p>
            <div className={style.outputTerm}>
              <p>Contact</p>
              <p>Education</p>
              <p>Experience</p>
              <p>Projects</p>
              <p>Skills</p>
            </div>

            <form className={style.colorLabel} action="api/redirect">
              <label>antolina@antolina-portfolio:~/</label>
              <input
                type="text"
                name="option"
                className={style.inputStyle}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
