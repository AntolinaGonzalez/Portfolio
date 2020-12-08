import style from "../styles/Home.module.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import Instructions from "../components/instructions";
import Term from "../components/littleTerm";
import Header from "../components/header";

export default function Contact() {
  return (
    <div className={style.backColor}>
      <Header></Header>
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
          <Instructions></Instructions>

          <Term></Term>
        </div>
      </div>
    </div>
  );
}
