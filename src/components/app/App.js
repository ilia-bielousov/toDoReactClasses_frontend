import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Registration from '../../pages/registration/registration';
import { loggedTrue } from '../../store/clientReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      dispatch(loggedTrue(true));
    }
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={
            <Main />
          } />
          <Route path='login' element={
            <Login />
          } />
          <Route path='registration' element={
            <Registration />
          } />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
