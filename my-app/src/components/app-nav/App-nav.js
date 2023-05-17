import { Component } from "react";
import { Container, Row, Nav } from "react-bootstrap";
import './App-nav.scss';

class AppNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav">
        <Container>
          <Row>
            <Nav variant="tabs" defaultActiveKey="Personal">
              <Nav.Item className="col-12 col-sm-6">
                <Nav.Link eventKey="Personal">Personal</Nav.Link>
              </Nav.Item>
              <Nav.Item className="col-12 col-sm-6">
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