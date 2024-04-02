import { useState } from 'react';
import React from 'react';
import { Form, Container, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { cfg } from '../../cfg/cfg';

function Admin() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState({
    value: null,
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget;

    if (!form.checkValidity()) return;

    try {
      setLoading(true);
      const data = {
        title,
        description,
      };

      const response = await fetch(`${cfg.API.HOST}/product`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',

          Authorization: 'Bearer token',
        },
        body: JSON.stringify(data),
      });

      const product = await response.json();

      if (!response.ok) throw new Error(product.error);

      setStatus({ value: 'success', message: 'Product created sucessfully' });
    } catch (error) {
      console.log('ERROR', error);
      setStatus({
        value: 'danger',
        message: error.message || 'Failed to create, try again',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            {status.value && (
              <Alert variant={status.value}>{status.message}</Alert>
            )}
            <Form.Group controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Required
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group controlId="validationCustom02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Required
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button disabled={loading} className="my-2" type="submit">
            create product
          </Button>
          {loading && <Spinner animation="border" variant="primary" />}
        </Form>
      </Container>
    </div>
  );
}

export default Admin;
