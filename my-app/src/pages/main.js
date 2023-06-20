import { Component } from "react";
import AppForm from "../components/appForm/AppForm";
import AppNav from "../components/appNav/AppNav";
import AppList from "../components/appList/AppList";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ourChoose: true,
    };
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
            onChoose={this.state.ourChoose}
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