import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loggedFalse } from "../../store/clientReducer";

import logo from './../../assets/images/logo.png';
import './AppHeader.scss';

const LoggedIn = () => {
  return (
    <Row>
      <Nav variant="tabs" className="nav_style-bg d-flex justify-content-center">
        <Nav.Item className="header__nav-item">
          <Link to="/login" className="header__link">Login</Link>
        </Nav.Item>
        <Nav.Item className="header__nav-item">
          <Link to="/registration" className="header__link">Registration</Link>
        </Nav.Item>
      </Nav>
    </Row>
  );
}

const LoggedOut = (dispatch) => {
  return (
    <Row>
      <Nav variant="tabs" className="nav_style-bg d-flex justify-content-center">
        <Nav.Item className="header__nav-item">
          <Link to="/" onClick={() => dispatch(loggedFalse(false))} className="header__link">Logout</Link>
        </Nav.Item>
      </Nav>
    </Row >
  )
}

const AppHeader = (props) => {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.client.logged);

  return (
    <header className="header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="header__logo logo p-4">
              <h1 className="logo__text mb-0 d-block text-center">
                <Link to="./" className="logo__link">
                  <img src={logo} alt="toDo" className="logo__image d-inline-block" />
                </Link>
              </h1>
            </div>
          </Col>
        </Row>
        {logged ? LoggedOut(dispatch) : LoggedIn()}
      </Container >
    </header >
  );
}

export default AppHeader;