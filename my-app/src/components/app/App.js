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
      .then(res => {
        this.test(res);
      });
  }

  deleteNote = async (id) => {
    const note = {
      _id: id
    }
    
    await fetch('http://localhost:5000/delete-note', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: window.localStorage.getItem('token'),
      },
      body: JSON.stringify(note)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }

  test = async (res) => {
    res = res.map(item => {
      return { ...item, checked: false }
    });

    const newData = [...res];

    this.setState(() => {
      return {
        notes: newData
      }
    })
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

  checkItem = (id) => {
    this.setState(({ notes }) => ({
      notes: notes.map(item => {
        if (item._id === id) {
          return { ...item, checked: !item.checked }
        }
        return item;
      })
    }));
  }

  deleteItem = (id) => {
    this.setState(({ notes }) => {
      return {
        notes: notes.filter(item => item._id !== id)
      }
    });
    
    this.deleteNote(id)
  }

  render() {
    return (
      <>
        <AppHeader logout={this.logout} logged={this.state.logged} />
        <Routes>
          <Route path='/' element={<Main logged={this.state.logged} addNote={this.addNote} notes={this.state.notes} checkItem={this.checkItem} deleteItem={this.deleteItem}/>} />
          <Route path='/login' element={<Login logging={this.logging} logged={this.state.logged} />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </>
    );
  }
}

export default App;
