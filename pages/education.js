import style from "../styles/Home.module.css";
import { Button, Accordion, Card, Modal } from "react-bootstrap";
import Instructions from "../components/instructions";
import Term from "../components/littleTerm";
import Header from "../components/header";
import Image from "next/image";

export default function Education() {
  return (
    <div className={style.backColor}>
      <Header></Header>
      <div className={style.divisionTwo}>
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
                      height={50}
                      width={100}
                    />
                    <div>
                      <p>University: UTN FRRe </p>
                      <h5>Current year: 4th</h5>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <div className={style.accordionTitle}>
                    <h4>2020 - Santander British Council </h4>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className={style.backEducation}>
                  <div className={style.accordionBody}>
                    <Image
                      src="/images/bc-logo.png"
                      alt="Picture of the author"
                      height={30}
                      width={150}
                    />
                    <div>
                      <p>British Council scholarship</p>
                      <h5>Santander Rio Bank</h5>
                      <h5>English upper-intermediate</h5>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <div className={style.accordionTitle}>
                    <h4>2017 - Instituto Superior Josefina Contte </h4>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className={style.backEducation}>
                  <div className={style.accordionBody}>
                    <Image
                      src="/images/jc-logo.gif"
                      alt="Picture of the author"
                      height={100}
                      width={100}
                    />
                    <div>
                      <p>English Course</p>
                      <h5>English (B1)</h5>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <p>Courses</p>
          <Accordion defaultActiveKey="0">
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <div className={style.accordionTitle}>
                    <h4>2020 - Alkemy Labs </h4>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className={style.backEducation}>
                  <div className={style.accordionBody}>
                    <Image
                      src="/images/alkemy-logo.jpeg"
                      alt="Picture of the author"
                      height={100}
                      width={100}
                    />
                    <div>
                      <p>Acceleration online program for developers</p>
                      <h5>Alkemy labs in Javascript</h5>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <div className={style.accordionTitle}>
                    <h4>2020 - Java programming MasterClass </h4>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className={style.backEducation}>
                  <div className={style.accordionBody}>
                    <Image
                      src="/images/java-logo.png"
                      alt="Picture of the author"
                      height={100}
                      width={100}
                    />
                    <div>
                      <p>Udemy</p>
                      <h5>50hs.</h5>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <div className={style.accordionTitle}>
                    <h4>2020 - Web Development </h4>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className={style.backEducation}>
                  <div className={style.accordionBody}>
                    <Image
                      src="/images/wd-logo.jpeg"
                      alt="Picture of the author"
                      height={100}
                      width={100}
                    />
                    <div>
                      <p>Udemy</p>
                      <h5>55hs.</h5>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div>
          <Instructions></Instructions>
          <div className={style.educationTerm}>
            <Term></Term>
          </div>
        </div>
      </div>
    </div>
  );
}
