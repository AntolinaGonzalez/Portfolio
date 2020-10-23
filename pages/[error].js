import style from "../styles/Home.module.css";
import Instructions from "../components/instructions";


Error.getInitialProps = async ({ query }) => {
  const cd=query.cd
  return {
    cd
  };
}
export default function Error(props) {
 
  return (
    <div className={style.backColor}>
      <div className={style.principal}>
        <h1>Antolina's Portfolio </h1>
        <h2>FullStack developer</h2>
      </div>
      <div className={style.division}>
      <Instructions></Instructions>
        <div className={style.terminalSpace}>
          <h3 className={style.centerStyle}>Terminal</h3>
          <div className={style.terminal}>
            <div className={style.terminalHead}>
              <p>antolina@antolina-portfolio</p>
            </div>
            <p style={{ color: "white", margin: 0, marginLeft: "10px" }}>
              antolina@antolina-portfolio:~$ {props.cd}
            </p>
            <div className={style.outputTerm}>
              <p>bash: {props.cd}: No such file or directory</p>
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
