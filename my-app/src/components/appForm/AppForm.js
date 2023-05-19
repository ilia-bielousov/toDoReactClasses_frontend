import { Component } from "react";
import './AppForm.scss';
import { Container, Col, Form, Button } from "react-bootstrap";

class AppForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  newNote = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  add = (e) => {
    e.preventDefault();
    
    this.props.addItem(this.state.text);
  }

  render() {
    return (
      <Container>
        <Form className="main__form py-5" onSubmit={this.add}>
          <Col className="d-flex justify-content-center">
            <Form.Control className="form-control" type="text" name="text" placeholder="What do you need to do?" onInput={this.newNote} />
            <Button className="form__btn" type="submit" variant="primary">
              add
            </Button>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default AppForm;