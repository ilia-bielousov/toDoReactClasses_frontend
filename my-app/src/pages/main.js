import { Component } from "react";
import AppForm from "../components/appForm/AppForm";
import AppList from "../components/appList/AppList";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ourChoose: true,
      dataPersonal: [{
        name: 'Personal',
        checked: false,
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat?',
        deleted: false,
        id: 0
      },
      {
        name: 'Personal',
        checked: false,
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat?',
        deleted: false,
        id: 1
      },
      {
        name: 'Personal',
        checked: false,
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat?',
        deleted: false,
        id: 2
      },
      {
        name: 'Personal',
        checked: false,
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat?',
        deleted: false,
        id: 3
      },
      {
        name: 'Personal',
        checked: true,
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat?',
        deleted: false,
        id: 4
      }],
      dataProfessional: [{
        name: 'Professional',
        checked: false,
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat?',
        deleted: false,
        id: 0
      },
      {
        name: 'Professional',
        checked: false,
        value: 'dsadsad',
        deleted: false,
        id: 1
      }]
    };
    this.maxId = 5;
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

  addItem = (text) => {
    if (this.state.ourChoose) {
      this.setState(({ dataPersonal }) => {
        const newNote = { checked: false, deleted: false, id: this.maxId++, name: 'Personal', value: text };

        const newData = [...dataPersonal, newNote];
        return {
          dataPersonal: newData
        }
      });
    } else {
      this.setState(({ dataProfessional }) => {
        const newNote = { checked: false, deleted: false, id: this.maxId++, name: 'Personal', value: text };

        const newData = [...dataProfessional, newNote];
        return {
          dataProfessional: newData
        }
      });
    }
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
      <main className='main'>
        <AppForm 
        addItem={this.addItem} 
        />
        <AppList
          data={ourChoose ? dataPersonal : dataProfessional}
          deleteItem={this.deleteItem}
          checkItem={this.checkItem}
        />
      </main>
    );
  }
}

export default Main;