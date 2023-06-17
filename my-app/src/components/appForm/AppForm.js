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

  addNote = async (text) => {
    const note = {
      text
    };

    await fetch('http://localhost:5000/add-note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: window.localStorage.getItem('token')
      },
      body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(res => console.log(res));
  }

  newNote = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  add = (e) => {
    e.preventDefault();

    this.addNote(this.state.text);
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