import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import PageTransition from '../PageTransition/PageTransition';
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
            <PageTransition>
              <Main />
            </PageTransition>
          } />
          <Route path='login' element={
            <PageTransition>
              <Login />
            </PageTransition>
          } />
          <Route path='registration' element={
            <PageTransition>
              <Registration />
            </PageTransition>
          } />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
