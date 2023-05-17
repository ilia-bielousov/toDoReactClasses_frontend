import { Component } from 'react';
import AppHeader from '../appHeader/AppHeader';
import AppNav from '../appNav/AppNav';
import AppForm from '../appForm/AppForm';
import './App.scss';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   data: []
  //   // }
  // }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppNav />
        <AppForm />
      </div>
    );
  }
}

export default App;
