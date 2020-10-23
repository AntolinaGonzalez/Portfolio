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
          <h3>Experience</h3>
          <Card className={style.experienceCard}>
            <Card.Body>
              <Card.Title>
                <h4>Teaching assistant ad honorem</h4>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h5>UTN FRRe</h5>
              </Card.Subtitle>
              <Card.Text>
                <h5>Syntax and semantics of languages.</h5>
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card className={style.experienceCard}>
            <Card.Body>
              <Card.Title>
                <h4>Electronic vote technique</h4>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h5>GRUPO M.S.A</h5>
              </Card.Subtitle>
              <Card.Text>
                <h5>technical assistant</h5>
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card className={style.experienceCard}>
            <Card.Body>
              <Card.Title>
                <h4>Internship</h4>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h5>Hospital Juan Pablo II</h5>
              </Card.Subtitle>
              <Card.Text>
                <h5>Administrative tasks</h5>
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
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
