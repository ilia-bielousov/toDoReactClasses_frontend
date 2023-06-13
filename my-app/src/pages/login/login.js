import { Component } from "react";
import { Container, Row, Form, Button } from 'react-bootstrap';
import './login.scss';

class Login extends Component {

  render() {
    return (
      <div className="login">
        <Container>
          <Row className="d-flex justify-content-center">
            <Form className="form-row d-flex flex-column align-items-center">
              <Form.Group className="login__email mb-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" className="mb-2" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="form-group login__inner login__password">
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

export default Login;