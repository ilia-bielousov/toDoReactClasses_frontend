import { Component } from 'react';
import AppHeader from '../app-header/App-header';
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
      </div>
    );
  }
}

export default App;
