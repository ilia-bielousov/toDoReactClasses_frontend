import { Component } from "react";
import { Container, Row, Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  logging = async (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(res => {
        if (!res.success) {
          alert(res.message);
        } else {
          this.saveToken(res);
        } 
      });
  }

  saveToken = async (res) => {
    this.props.logging(res);

    this.setState({
      name: '',
      salary: ''
  });
  }

  render() {
    const { logged } = this.props;

    if (logged) {
      return <Navigate to='/' />
    }

    return (
      <div className="login">
        <Container>
          <Row className="d-flex justify-content-center">
            <Form onSubmit={(e) => this.logging(e)} className="form_style d-flex flex-column align-items-center">
              <h3 className="registartion__title">Login</h3>
              <Form.Group className="login__username mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" className="mb-2" placeholder="Username" onChange={(e) => this.changeUsername(e)} />
              </Form.Group>
              <Form.Group className="form-group login__inner login__password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="mb-2" placeholder="Password" onChange={(e) => this.changePassword(e)} />
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