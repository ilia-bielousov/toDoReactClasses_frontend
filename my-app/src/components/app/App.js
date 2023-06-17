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

  getAllNotes = async () => {
    await fetch('http://localhost:5000/notes', {
      method: 'GET',
      headers: {
        authorization: window.localStorage.getItem('token')
      },
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      this.setState({
        logged: true
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.logged != this.state.logged) {
      this.getAllNotes();
    }
  }

  render() {
    return (
      <>
        <AppHeader logout={this.logout} logged={this.state.logged} />
        <Routes>
          <Route path='/' element={<Main logged={this.state.logged} addNote={this.addNote} />} />
          <Route path='/login' element={<Login logging={this.logging} logged={this.state.logged} />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </>
    );
  }
}

export default App;
