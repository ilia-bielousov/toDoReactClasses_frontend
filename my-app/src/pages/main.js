import { Component } from "react";
import AppForm from "../components/appForm/AppForm";
import AppNav from "../components/appNav/AppNav";
import AppList from "../components/appList/AppList";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ourChoose: true,
      dataPersonal: [{}],
      dataProfessional: [{}]
    };
    this.maxId = 0;
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

  render() {
    const { logged } = this.props;
    const { notes } = this.props

    return (
      logged ?
        (<main className='main'>
          <AppNav
            onChoose={this.chooseDataBase} />
          <AppForm
            onChoose={this.state.ourChoose}
          />
          <AppList
            data={notes}
            deleteItem={this.props.deleteItem}
            checkItem={this.props.checkItem}
          />
        </main>) :
        (<main className='main'>
          opis
        </main>)
    );
  }
}

export default Main;