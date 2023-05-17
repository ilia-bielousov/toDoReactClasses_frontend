import { Component } from 'react';
import AppHeader from '../appHeader/AppHeader';
import AppNav from '../appNav/AppNav';
import AppForm from '../appForm/AppForm';
import AppList from '../appList/AppList';
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
        <AppList />
      </div>
    );
  }
}

export default App;
