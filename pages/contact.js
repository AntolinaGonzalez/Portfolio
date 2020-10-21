import style from "../styles/Home.module.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import Instructions from "../components/instructions";
import Term from '../components/littleTerm'
export default function Contact() {
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
        <div className={style.backFormContact}>
          <Form className={style.contactForm}>
            <h4>Email me and I will Contact you</h4>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address: </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea: </Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </div>
        <div className={style.centerStyle}>
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
