import { Component } from 'react';
import AppHeader from '../app-header/App-header';
import AppNav from '../app-nav/App-nav';
import AppForm from '../app-form/App-form';
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
