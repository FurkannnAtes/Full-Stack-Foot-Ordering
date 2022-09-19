import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Title from "./ui/Title";

const BookATable = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="book-table-container px-5 py-5">
      <Title>
        <h1 className="px-5 py-3">Book A Table</h1>
      </Title>

      <div className="row h-100 gap-5 gap-lg-0 ">
        <div className="col-lg-6  px-lg-5">
          <Form
            className="d-flex flex-column gap-3 "
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="validationCustom01">
              <Form.Control
                style={{ height: "60px" }}
                required
                type="text"
                placeholder="Your Full Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                This place cannot be left blank.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02">
              <Form.Control
                style={{ height: "60px" }}
                required
                type="text"
                placeholder="Phone Number"
              />
              <Form.Control.Feedback>Phone Number</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                This place cannot be left blank.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom03">
              <Form.Control
                style={{ height: "60px" }}
                required
                type="email"
                placeholder="E-mail"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                This place cannot be left blank.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationCustom04">
              <Form.Select
                style={{ height: "60px" }}
                aria-label="How Many Person ?"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                This place cannot be left blank.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom03">
              <Form.Control
                style={{ height: "60px" }}
                required
                type="date"
                placeholder="E-mail"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                This place cannot be left blank.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="warning"
              className="d-inline  text-white"
              type="submit"
              style={{ width: "150px" }}
            >
              Submit form
            </Button>
          </Form>
        </div>
        <div className="col-lg-6">
          <iframe
            className="w-100"
            height={500}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204895.4943798389!2d-74.2708134703543!3d40.76628849049371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1663265623112!5m2!1str!2str"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookATable;
