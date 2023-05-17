import { Component } from "react";
import './AppForm.scss';
import { Container, Col, Form, Button } from "react-bootstrap";

class AppForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Form className="main__form py-5">
          <Col className="d-flex justify-content-center">
            <Form.Control className="form-control" type="text" placeholder="What do you need to do?" />
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