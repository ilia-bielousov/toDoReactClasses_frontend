import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="test">
          create react
        </header>
      </div>
    );
  }
}

export default App;
