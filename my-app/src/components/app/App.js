import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import Main from '../../pages/main';
import Login from '../../pages/login/login';
import Registration from '../../pages/registration/registration';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged: false
    }

    this.logging = this.logging.bind(this);
    this.logout = this.logout.bind(this);
  }

  logging(res) {
    window.localStorage.setItem('token', res.token);
    this.setState({
      logged: true
    });
  }

  logout() {
    window.localStorage.removeItem('token');
    this.setState({
      logged: false
    });
  }

  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      this.setState({
        logged: true
      });
    }
  }

  render() {
    return (
      <>
        <AppHeader logout={this.logout} logged={this.state.logged} />
        <Routes>
          <Route path='/' element={<Main logged={this.state.logged} />} />
          <Route path='/login' element={<Login logging={this.logging} logged={this.state.logged} />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </>
    );
  }
}

export default App;
