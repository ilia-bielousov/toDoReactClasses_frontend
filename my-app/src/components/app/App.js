import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import Main from '../../pages/main';
import Login from '../../pages/login/login';
import Registration from '../../pages/registration/registration';
import AppNav from '../appNav/AppNav';

class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <AppNav onChoose={this.chooseDataBase} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>

      </>
    );
  }
}

export default App;
