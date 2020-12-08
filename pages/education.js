import style from "../styles/Home.module.css";
import { Button, Accordion, Card, Modal } from "react-bootstrap";
import Instructions from "../components/instructions";
import Term from "../components/buttonTerm";
import Header from "../components/header";
import Image from "next/image";

export default function Education() {
  return (
    <div className={style.backColor}>
      <Header></Header>
      <div>
        <div className={style.rightStyle}>
          <Term></Term>
          <Instructions></Instructions>
        </div>
        <p></p>
        <div className={style.title}>
          <p>Education</p>
          <Accordion defaultActiveKey="0">
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <div className={style.accordionTitle}>
                    <h4>2020 - Information Systems Engineering </h4>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className={style.backEducation}>
                  <div className={style.accordionBody}>
                    <Image
                      src="/images/unt-logo.png"
                      alt="Picture of the author"
                      width={200}
                      height={"auto"}
                    />
                    <div>
                      <p>University: UTN </p>
                      <h5>(4th year- current)</h5>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <h4>2020 - Santander British Council </h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className={style.backEducation}>
                  <h5>Scholarship</h5>
                  <h5>English upper-intermediate</h5>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <h4>2017 - Instituto Superior Josefina Contte </h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className={style.backEducation}>
                  <h5>English (B1)</h5>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <p>Courses</p>
          <Accordion defaultActiveKey="0">
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <h4>2020 - Alkemy Labs </h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className={style.backEducation}>
                  <h5>Acceleration online program for developers</h5>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <h4>2020 - Java programming MasterClass </h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className={style.backEducation}>
                  <h5>Udemy</h5>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <h4>2020 - Web Development </h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className={style.backEducation}>
                  <h5>Udemy</h5>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
