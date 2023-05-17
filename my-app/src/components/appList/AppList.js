import { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import AppListItem from "../appListItem/appListItem";
import './AppList.scss';

class AppList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="main__list list p-3 mb-4">
          <ListGroup as="ul" className="list__inner">
            <ListGroupItem as="li" className="list__item d-flex align-items-center">
              <AppListItem />
            </ListGroupItem>
            <ListGroupItem as="li" className="list__item d-flex align-items-center">
              <AppListItem />
            </ListGroupItem>
            <ListGroupItem as="li" className="list__item d-flex align-items-center">
              <AppListItem />
            </ListGroupItem>
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default AppList;