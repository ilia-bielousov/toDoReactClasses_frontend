import { Component } from "react";
import { Container, Row, Form, Button } from 'react-bootstrap';
import './registration.scss';

class Registration extends Component {

  render() {
    return (
      <div className="registration">
        <Container>
          <Row className="d-flex justify-content-center">
            <Form className="form_style d-flex flex-column align-items-center">
              <Form.Group className="registration__email mb-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" className="mb-2" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="registration__email mb-2">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" className="mb-2" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="form-group registration__inner registration__password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="mb-2"placeholder="Password" />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Registration;