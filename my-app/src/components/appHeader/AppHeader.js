import { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './../../assets/images/logo.png';
import './AppHeader.scss';

const AppHeader = (props) => {

    const { logged }= props;
    // console.log(props);
    return (
      <header className="header">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center">
                <div className="header__logo logo p-4">
                  <h1 className="logo__text mb-0 d-block text-center">
                    <Link to="./" className="logo__link">
                      <img src={logo} alt="" className="logo__image d-inline-block" />
                    </Link>
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
          {!logged ?
            (
              <Row>
                <Nav variant="tabs" className="test">
                  <Nav.Item>
                    <Link to="/login" className="header__link">Login</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/registration" className="header__link">Registration</Link>
                  </Nav.Item>
                </Nav>
              </Row>
            ) : (
              <Row>
                <Nav variant="tabs" className="test">
                  <Nav.Item>
                    <Link to="/" onClick={props.logout} className="header__link">Logout</Link>
                  </Nav.Item>
                </Nav>
              </Row>
            )}
        </Container>
      </header>
    );
}

export default AppHeader;