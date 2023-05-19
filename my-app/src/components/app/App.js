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

  checkItem = (id) => {
    if (this.state.ourChoose) {
      this.setState(({ dataPersonal }) => ({
        dataPersonal: dataPersonal.map(item => {
          if (item.id === id) {
            return { ...item, checked: !item.checked }
          }
          return item;
        })
      }));
    } else {
      this.setState(({ dataProfessional }) => ({
        dataProfessional: dataProfessional.map(item => {
          if (item.id === id) {
            return { ...item, checked: !item.checked }
          }
          return item;
        })
      }));
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
    if (this.state.ourChoose) {
      this.setState(({ dataPersonal }) => {
        return {
          dataPersonal: dataPersonal.filter(item => item.id !== id)
        }
      });
    } else {
      this.setState(({ dataProfessional }) => {
        return {
          dataProfessional: dataProfessional.filter(item => item.id !== id)
        }
      });
    }
  }

  render() {
    const { ourChoose, dataPersonal, dataProfessional } = this.state;

    return (
      <div className="App">
        <AppHeader />
        <AppNav onChoose={this.chooseDataBase} />
        <main className='main'>
          <AppForm />
          <AppList
            data={ourChoose ? dataPersonal : dataProfessional}
            deleteItem={this.deleteItem}
            checkItem={this.checkItem}
          />
        </main>
      </div>
    );
  }
}

export default App;
