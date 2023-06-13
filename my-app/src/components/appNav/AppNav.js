import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Nav } from "react-bootstrap";
import './AppNav.scss';

class AppNav extends Component {

  switch = (e) => {
    this.props.onChoose(e.target);
  }

  render() { // написать проверку если пользователь залогинен, выводим одно меню, если нет, то совершенно другое, где кнопка логин и регистрация

    return (
      <div className="nav">
        <Container>
          <Row>
            <Nav variant="tabs">
              <Nav.Item className="col-12 col-sm-6">
                <Link to="/login">Login</Link>
              </Nav.Item>
              <Nav.Item className="col-12 col-sm-6">
                <Link to="registration">Registration</Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row>
            <Nav variant="tabs" defaultActiveKey="Personal">
              <Nav.Item className="col-12 col-sm-6" onClick={this.switch}>
                <Nav.Link eventKey="Personal">Personal</Nav.Link>
              </Nav.Item>
              <Nav.Item className="col-12 col-sm-6" onClick={this.switch}>
                <Nav.Link eventKey="Professional">Professional</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
        </Container>
      </div >
    );
  }
}

export default AppNav;