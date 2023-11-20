import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { inputUser, loggedTrue } from '../../store/clientReducer';

import './login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.client.logged);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (user) => {
    req(user);
  }

  const req = async (body) => {
    await fetch(`http://localhost:5000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        if (!res.success) {
          alert(res.message);
        } else {
          window.localStorage.setItem('token', res.token);
          dispatch(loggedTrue(true));
        }
      });
  }
  
  if (logged) {
    return <Navigate to='/' />
  }

  return (
    <div className="login">
      <Container>
        <Row className="d-flex justify-content-center">
          <Form onSubmit={handleSubmit(onSubmit)} className="form_style d-flex flex-column align-items-center">
            <h3 className="registartion__title">Login</h3>
            <Form.Group className="login__username mb-2">
              <Form.Label>Username</Form.Label>
              <Form.Control {...register('username')} type="text" className="mb-2" placeholder="Username" />
            </Form.Group>
            <Form.Group className="form-group login__inner login__password">
              <Form.Label>Password</Form.Label>
              <Form.Control {...register('password')} type="password" className="mb-2" placeholder="Password" />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Login;