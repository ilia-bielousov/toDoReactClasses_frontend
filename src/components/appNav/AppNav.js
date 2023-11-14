import { useDispatch } from "react-redux";
import { Container, Row, Nav } from "react-bootstrap";
import { inputChoose } from "../../store/clientReducer";
import './AppNav.scss';

const AppNav = () => {
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <Container>
        <Row>
          <Nav variant="tabs" defaultActiveKey={'Personal'}>
            <Nav.Item className="col-12 col-sm-6" onClick={() => dispatch(inputChoose('Personal'))} >
              <Nav.Link eventKey="Personal" data-personal>Personal</Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-12 col-sm-6" onClick={() => dispatch(inputChoose('Professional'))}>
              <Nav.Link eventKey="Professional">Professional</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    </div >
  )
}

export default AppNav;