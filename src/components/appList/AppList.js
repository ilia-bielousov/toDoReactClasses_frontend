import { useSelector } from 'react-redux';
import { Container, Row, ListGroup } from "react-bootstrap";
import AppListItem from "../appListItem/appListItem.js";
import './AppList.scss';

const AppList = () => {
  const notes = useSelector(state => state.client.notes);

  return (
    <Container>
      <Row className="main__list list p-3 mb-4">
        <ListGroup as="ul" className="list__inner">
          {notes.map(item => {
            const { _id, ...itemProps } = item;
            return (
              <AppListItem
                key={_id}
                {...itemProps}
              />
            )
          })}
        </ListGroup>
      </Row>
    </Container>
  );
}

export default AppList;