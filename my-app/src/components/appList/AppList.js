import { Component } from "react";
import { Container, Row, ListGroup } from "react-bootstrap";
import AppListItem from "../appListItem/appListItem";
import './AppList.scss';

class AppList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const ourData = this.props;

    const items = ourData.data[0].map(item => {
      const { id, ...itemProps } = item

      return (
        <AppListItem key={id}
          {...itemProps} />
      )
    });

    console.log(ourData);

    return (
      <Container>
        <Row className="main__list list p-3 mb-4">
          <ListGroup as="ul" className="list__inner">
            {items}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default AppList;