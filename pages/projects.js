import style from "../styles/Home.module.css";
import { Button, Tabs, Tab, Sonnet, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import Instructions from "../components/instructions";
import Term from "../components/littleTerm";

export default function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [key, setKey] = useState("bmrec");

  return (
    <div className={style.backColor}>
      <div className={style.principal}>
        <h1>Antolina's Portfolio </h1>
        <h2>FullStack developer</h2>
      </div>
      <div className={style.divisionTwo}>
        <div>
          <h3>Projects</h3>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className={style.experienceCard}
          >
            <Tab eventKey="bmrec" title="BMRec">
              <h2>BMRec</h2>
              <h5>You can recommend anything here! a book, a movie, whatever you want</h5>
              <h5>Soon you will be able to comment on post and upload images</h5>

              <h3>Tecnologies</h3>
              <h5>Adonisjs - NodeJS framework</h5>

              <h5>I really love this framework. It makes anything you want. authentication its so easy</h5>
            </Tab>
            <Tab eventKey="ticmas" title="Ticmas">
              <h1>Ticmas</h1>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <h1>Hola</h1>
            </Tab>
          </Tabs>
          );
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
