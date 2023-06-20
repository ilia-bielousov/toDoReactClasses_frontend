import { Component } from "react";
import AppForm from "../components/appForm/AppForm";
import AppNav from "../components/appNav/AppNav";
import AppList from "../components/appList/AppList";
import { Container, Row } from "react-bootstrap";

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
    const { logged, notes } = this.props;

    return (
      logged ?
        (<main className='main'>
          <AppNav
            onChoose={this.chooseDataBase} 
            ourChoose={this.state.ourChoose}
            />
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
          <Container>
            <Row>
              <p className="main__text pt-5 pb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est consequuntur itaque aliquam fugiat iure repudiandae non blanditiis temporibus quidem distinctio, rerum perferendis facere. Voluptatibus libero quisquam, excepturi officia fuga sint obcaecati earum aspernatur consequuntur doloribus dolore nesciunt nemo cupiditate ad, rem ab vel labore ipsam, distinctio tempora quidem harum eius.
              </p>
            </Row>
          </Container>
        </main>)
    );
  }
}

export default Main;