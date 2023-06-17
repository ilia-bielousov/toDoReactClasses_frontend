import { Component } from "react";
import AppForm from "../components/appForm/AppForm";
import AppNav from "../components/appNav/AppNav";
import AppList from "../components/appList/AppList";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ourChoose: true,
      dataPersonal: [{
        checked: false,
        value: 'Personal',
        deleted: false,
        id: 0
      }],
      dataProfessional: [{
        checked: false,
        value: 'Professional',
        deleted: false,
        id: 0
      }]
    };
    this.maxId = 0;
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
    this.setState(() => {
      if (nav.getAttribute('data-personal')) {
        return {
          ourChoose: true
        }
      } else {
        return {
          ourChoose: false
        }
      }
    });
  }

  addItem = (text) => {
    if (this.state.ourChoose) {
      this.setState(({ dataPersonal }) => {
        const newNote = { checked: false, deleted: false, id: this.maxId + 1, value: text };

        const newData = [...dataPersonal, newNote];
        return {
          dataPersonal: newData
        }
      });
    } else {
      this.setState(({ dataProfessional }) => {
        const newNote = { checked: false, deleted: false, id: this.maxId + 1, value: text };

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
    const { logged } = this.props;

    console.log(logged);

    return (
      logged ?
        (<main className='main'>
          <AppNav
            onChoose={this.chooseDataBase} />
          <AppForm
            addItem={this.addItem}
          />
          <AppList
            data={ourChoose ? dataPersonal : dataProfessional}
            deleteItem={this.deleteItem}
            checkItem={this.checkItem}
          />
        </main>) : 
        (<main className='main'>
            opis
          </main>)
    );
  }
}

export default Main;