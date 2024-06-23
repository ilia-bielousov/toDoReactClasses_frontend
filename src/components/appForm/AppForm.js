import { useForm } from "react-hook-form";
import { Container, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Request } from "../../utilities/utilities";
import { doChange } from "../../store/clientReducer";
import './AppForm.scss';

const AppForm = () => {
  const dispatch = useDispatch();
  const choose = useSelector(state => state.client.choose);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const note = {
      ...data,
      profile: choose
    };

    Request('http://localhost:5000/add-note', 'POST', note);
    dispatch(doChange(true));
    reset();
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
            {...register('text', {required: true})}
          />
          { errors.text ? alert('обязательно вводите текст для заметки') : null }
          <Button 
          className="form__btn" 
          type="submit"
          // onClick={}
          variant="primary">
            add
          </Button>
        </Col>
      </Form>
    </Container>
  );
}

export default AppForm;