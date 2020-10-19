import style from "../styles/Home.module.css";
import { Button, Accordion, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import Instructions from "../components/instructions";
import Term from "../components/littleTerm";
export default function Education() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={style.backColor}>
      <div className={style.principal}>
        <h1>Antolina's Portfolio </h1>
        <h2>FullStack developer</h2>
      </div>
      <div className={style.divisionTwo}>
        <div>
          <h3>Education</h3>
          <Accordion defaultActiveKey="0" className={style.backColor}>
            <Card className={style.backEducation}>
              <Card.Header className={style.backEducation}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <h4>2020 - Information Systems Engineering </h4>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className={style.backEducation}>
                  <h5>(3th year- current)</h5>
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

          <h3>Courses</h3>
          <Accordion defaultActiveKey="0" className={style.backColor}>
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

        <div>
          <h5>If you wanna get back you will have to use the terminal</h5>
          <Button variant="success" onClick={handleShow}>
            Instructions
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className={style.modalStyle}>
              <Modal.Title>
                <h1>Instructions</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className={style.modalStyle}>
              <Instructions></Instructions>
            </Modal.Body>
            <Modal.Footer className={style.modalStyle}>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Term></Term>
        </div>
      </div>
    </div>
  );
}
