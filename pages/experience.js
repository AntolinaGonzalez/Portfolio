import style from "../styles/Home.module.css";
import { Button, Accordion, Card, Modal } from "react-bootstrap";
import Instructions from "../components/instructions";
import Term from "../components/littleTerm";
import Header from "../components/header";


export default function Education() {
  return (
    <div className={style.backColor}>
      <Header></Header>
      <div className={style.divisionTwo}>
        <div>
          <div className={style.experienceTitle}>
            <p>Experience</p>
          </div>
          <Card className={style.experienceCard}>
            <Card.Body>
              <Card.Title>
                <div className={style.accordionTitle}>
                  <h4 style={{ fontWeight: "bold" }}>2020 - Developer</h4>
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h5>- Grupo vidaTEC</h5>
              </Card.Subtitle>
              <Card.Text>
                <h5>Start Date: 11-2020</h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.experienceCard}>
            <Card.Body>
              <Card.Title>
                <div className={style.accordionTitle}>
                  <h4 style={{ fontWeight: "bold" }}>
                    2020 - Teaching assistant ad honorem
                  </h4>
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h5>- UTN FRRe</h5>
              </Card.Subtitle>
              <Card.Text>
                <h5>Subject: Syntax and semantics of languages.</h5>
                <h5>Start Date: 03-2020</h5>
                <h5>End Date: 06-2020</h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.experienceCard}>
            <Card.Body>
              <Card.Title>
                <div className={style.accordionTitle}>
                  <h4 style={{ fontWeight: "bold" }}>
                    2019 - Electronic vote technique
                  </h4>
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h5>- GRUPO M.S.A</h5>
              </Card.Subtitle>
              <Card.Text>
                <h5>technical assistant</h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.experienceCard}>
            <Card.Body>
              <Card.Title>
                <div className={style.accordionTitle}>
                  <h4 style={{ fontWeight: "bold" }}>2014 - Internship</h4>
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h5>- Hospital Juan Pablo II</h5>
              </Card.Subtitle>
              <Card.Text>
                <h5>Administrative tasks</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Instructions></Instructions>
          <Term></Term>
        </div>
      </div>
    </div>
  );
}
