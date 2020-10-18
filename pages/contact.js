import style from "../styles/Home.module.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
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
        <div>
          <h5>If you wanna get back you will have to use the terminal</h5>
          <Button variant="success" onClick={handleShow}>
            Instructions
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h1>Instructions</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>You can manage to terminal to get to know me</h6>
              <h6>if you wanna know what are enter 'ls' in the terminal</h6>
              <h6>cd 'option' to see the context</h6>
              <h6>p.e : cd Experience </h6>
              <h6>and you will be render to my experience page</h6>
              <h6>Try! its fun</h6>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <div className={style.terminalSpace}>
            <h3 className={style.centerStyle}>Terminal</h3>
            <div className={style.terminalLitle}>
              <div className={style.terminalHeadLitle}>
                <p>antolina@antolina-portfolio</p>
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
    </div>
  );
}
