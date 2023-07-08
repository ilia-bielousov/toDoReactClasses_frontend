import { Component } from "react";
import { Container, Row, ListGroup } from "react-bootstrap";
import AppListItem from "../appListItem/appListItem.js";
import './AppList.scss';

class AppList extends Component {
  constructor(props) {
    super();
    
    this.state = {
      loading: false
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.data != this.props.data) {
      this.setState({loading: true})
    }
  }

  render() {
    return (
      <Container>
        <Row className="main__list list p-3 mb-4">
          <ListGroup as="ul" className="list__inner">
            {this.state.loading ? this.props.data.map(item => { // можно чуть переписать, но пока я епал
              if (this.props.onChoose && item.profile == 'Personal') {
                const { _id, ...itemProps } = item;
                return (
                  <AppListItem
                    key={_id}
                    {...itemProps}
                    deleteItem={() => this.props.deleteItem(_id)}
                    checkItem={() => this.props.checkItem(_id)} />
                )
              }

              if (!this.props.onChoose && item.profile == 'Professional') {
                const { _id, ...itemProps } = item;
                return (
                  <AppListItem
                    key={_id}
                    {...itemProps}
                    deleteItem={() => this.props.deleteItem(_id)}
                    checkItem={() => this.props.checkItem(_id)} />
                )
              }
            }): null}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default AppList;