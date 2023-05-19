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
      ourChoose: true,
      dataPersonal: [{
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
      },
      {
        name: 'Personal',
        checked: false,
        value: '',
        deleted: false,
        id: 3
      },
      {
        name: 'Personal',
        checked: true,
        value: '',
        deleted: false,
        id: 4
      }],
      dataProfessional: [{
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
      }]
    }
  }

  chooseDataBase = (nav) => {
    this.setState(({ ourChoose }) => {
      if (nav.getAttribute('Personal')) {
        return {
          ourChoose: !ourChoose
        } 
      } else {
        return {
          ourChoose: !ourChoose
        }
      }
    });
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  render() {
    const { ourChoose, dataPersonal, dataProfessional } = this.state;

    return (
      <div className="App">
        <AppHeader />
        <AppNav onChoose={this.chooseDataBase}/>
        <main className='main'>
          <AppForm />
          <AppList
            data={ourChoose ? dataPersonal : dataProfessional}
            deleteItem={this.deleteItem}
          />
        </main>
      </div>
    );
  }
}

export default App;
