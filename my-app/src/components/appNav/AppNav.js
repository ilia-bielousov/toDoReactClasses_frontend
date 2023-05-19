import { Component } from "react";
import { Container, Row, Nav } from "react-bootstrap";
import './AppNav.scss';

class AppNav extends Component {
  // constructor(props) {
  //   super(props);
  // }

  switch = (e) => {
    this.props.onChoose(e.target);
  }

  render() {
    
    return (
      <div className="nav">
        <Container>
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