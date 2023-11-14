import { useForm } from "react-hook-form";
import { Container, Col, Form, Button } from "react-bootstrap";
import './AppForm.scss';
import { useSelector } from "react-redux";

const AppForm = () => {
  const choose = useSelector(state => state.client.choose);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(); // обработать чтобы был текст

  const onSubmit = async (data) => {
    const note = {
      ...data,
      profile: choose
    };

    await fetch(`http://localhost:5000/add-note`, {
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

  return (
    <Container>
      <Form className="main__form py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Col className="d-flex justify-content-center">
          <Form.Control
            className="form-control"
            type="text"
            name="text"
            placeholder="What do you need to do?"
            {...register('text')}
          />
          <Button className="form__btn" type="submit" variant="primary">
            add
          </Button>
        </Col>
      </Form>
    </Container>
  );
}

export default AppForm;