import { useForm } from 'react-hook-form';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { stateRegister } from '../../store/clientReducer';
import { Navigate } from "react-router-dom";
import './registration.scss';

const Registration = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.client.register);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const registration = async (body) => {

    if (body.password === body.password_repeat) {
      await fetch(`http://localhost:5000/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(res => responsReg(res));
    }
    else {
      alert('пароли не совпадают');
    }
  }

  const responsReg = async (res) => {
    if (res.success) {
      alert(`${res.message} and now you can logging.`);

      dispatch(stateRegister(true));
    } else {
      alert(`${res.message} please try again`);
    }
  }

  if (status) {
    dispatch(stateRegister(false));

    return <Navigate to='/login' />
  }

  return (
    <div className="registration">
      <Container>
        <Row className="d-flex justify-content-center">
          <Form onSubmit={handleSubmit(registration)} className="form_style d-flex flex-column align-items-center">
            <h3 className="registartion__title">Registration</h3>
            <Form.Group className="registration__email mb-2">
              <Form.Label>Username</Form.Label>
              <Form.Control {...register('username')} type="text" className="mb-2" placeholder="Username" />
            </Form.Group>
            <Form.Group className="form-group registration__inner registration__password">
              <Form.Label>Password</Form.Label>
              <Form.Control {...register('password')} type="password" className="mb-2" placeholder="Password" />
            </Form.Group>
            <Form.Group className="form-group registration__inner registration__password">
              <Form.Label>Repeat your password</Form.Label>
              <Form.Control {...register('password_repeat')} type="password" className="mb-2" placeholder="Password" />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Registration;