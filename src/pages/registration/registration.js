import { Component } from "react";
import { Container, Row, Form, Button } from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import './registration.scss';

class Registration extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: '',
      next: false
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

  registration = async (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    await fetch(`${process.env.REACT_APP_API_URL}/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(res => this.responsReg(res));
  }

  responsReg = async (res) => {
    if (res.success) {
      alert(`${res.message} and now you can logging.`);

      this.setState({
        next: true
      });
    } else {
      alert(`${res.message} please try again`);
      this.setState({
        username: '',
        password: '',
      })
    }
  }

  render() {
    if (this.state.next) {
      return <Navigate to='/' />
    }

    return (
      <div className="registration">
        <Container>
          <Row className="d-flex justify-content-center">
            <Form onSubmit={(e) => this.registration(e)} className="form_style d-flex flex-column align-items-center">
              <h3 className="registartion__title">Registration</h3>
              <Form.Group className="registration__email mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={this.state.username} className="mb-2" placeholder="Username" onChange={(e) => this.changeUsername(e)} />
              </Form.Group>
              <Form.Group className="form-group registration__inner registration__password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={this.state.password} className="mb-2" placeholder="Password" onChange={(e) => this.changePassword(e)} />
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