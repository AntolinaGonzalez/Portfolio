import style from "../styles/Home.module.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button  className={style.colorButton} onClick={handleShow} href='/'>
        Terminal
      </Button>
    </div>
  );
}
