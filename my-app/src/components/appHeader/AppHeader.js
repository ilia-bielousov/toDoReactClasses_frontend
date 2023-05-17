import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from './../../assets/images/logo.png';
import './AppHeader.scss';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center">
                <div className="header__logo logo p-4">
                  <h1 className="logo__text mb-0 d-block text-center">
                    <a href="./" className="logo__link">
                      <img src={logo} alt="" className="logo__image d-inline-block" />
                    </a>
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default AppHeader;