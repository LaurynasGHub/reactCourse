import React from 'react';
import { Form, Col } from 'react-bootstrap';
// import Col from 'react-bootstrap/esm/Col';
// import { Col } from 'react-bootstrap/esm/Col';

function Admin() {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="my-container p-5">
      <Form noValidate onSubmit={handleSubmit()}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Admin;
