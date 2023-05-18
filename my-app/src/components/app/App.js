import { Component } from 'react';
import AppHeader from '../appHeader/AppHeader';
import AppNav from '../appNav/AppNav';
import AppForm from '../appForm/AppForm';
import AppList from '../appList/AppList';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [[{
        name: 'Personal',
        checked: false,
        value: '',
        deleted: false,
        id: 0
      },
      {
        name: 'Personal',
        checked: false,
        value: '',
        deleted: false,
        id: 1
      },
      {
        name: 'Personal',
        checked: false,
        value: '',
        deleted: false,
        id: 2
      }],
      [{
        name: 'Professional',
        checked: false,
        value: '',
        deleted: false,
        id: 0
      },
      {
        name: 'Professional',
        checked: false,
        value: '',
        deleted: false,
        id: 1
      }]]
    }
  }

  render() {
    const {data} = this.state

    return (
      <div className="App">
        <AppHeader />
        <AppNav />
        <main className='main'>
          <AppForm />
          <AppList data={data}/>
        </main>
      </div>
    );
  }
}

export default App;
