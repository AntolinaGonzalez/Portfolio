import style from "../styles/Home.module.css";
import { Popover, OverlayTrigger, Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Instructions() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Case-Insensitive</Popover.Title>
      <Popover.Content>
        Uppercase and Lowercase letters are treated as same
      </Popover.Content>
    </Popover>
  );
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button className={style.buttonStyle} variant="warning">
        ?
      </Button>
    </OverlayTrigger>
  );
  return (
    <div className={style.centerStyle}>
      <div>
        <Button className={style.colorButton} onClick={handleShow}>
          Instructions
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className={style.modalStyle}
        >
          <Modal.Header closeButton className={style.modalStyle}>
            <Modal.Title>
              <h3>Instructions</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={style.modalStyle}>
            <h5>To get to know me you have to use the terminal</h5>
            <h5>Type 'ls' in the terminal to know all the options</h5>
            <h5>cd 'option' to access a specific option</h5>
            <h5>cd .. to get back to the index</h5>
            <h5 className={style.example}>p.e : cd Experience </h5>
            <h5>and you will be render to my experience page</h5>

            <h5>
              the commands are case-Insensitive <Example />
            </h5>
          </Modal.Body>
          <Modal.Footer className={style.modalStyle}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
