import { useDispatch, useSelector } from "react-redux";
import AppForm from "../../components/appForm/AppForm";
import AppNav from "../../components/appNav/AppNav";
import AppList from "../../components/appList/AppList";
import { Container, Row } from "react-bootstrap";

import './main.scss';

const notLoggedLayout = () => {
  return (
    <main className='main'>
      <Container>
        <Row>
          {/* это хуйню польскую переписать, она нахер никому не нужна */}
          <h2 className="main__title py-4">
            Witamy na głównej stronie <b>toDo</b> appki!
          </h2>
          <p className="main__text">
            Chciałbym przedstawić Państwu mój projekt, który stworzyłem w celu rozszerzenia mojego portfolio oraz znalezienia pracy jako programista. Ten projekt demonstruje moje umiejętności tworzenia aplikacji internetowych z wykorzystaniem najnowszych technologii.
          </p>
          <p className="main__text">
            Podstawą tego projektu jest <b>React</b> - potężna biblioteka <b>JavaScript</b>, umożliwiająca tworzenie interaktywnych interfejsów użytkownika. W projekcie korzystałem z <b>komponentów klasowych</b>, żeby głebszej zrozumiec tą bibliotekę. Wykorzystałem <b>React Router</b> do stworzenia trzech stron, które można łatwo nawigować, zapewniając natychmiastową zmianę treści.
          </p>
          <p className="main__text">
            Na froncie skupiłem się na tworzeniu atrakcyjnego i intuicyjnego designu, który zapewnia użytkownikom wygodę użytkowania. Zastosowałem nowoczesne metody stylizacji, korzystając z <b>prepros SCSS</b>. Wynikiem jest piękny interfejs użytkownika z atrakcyjną wizualizacją i intuicyjną nawigacją.
          </p>
          <p className="main__text">
            Na back-endzie zaimplementowałem serwer przy użyciu <b>Node.js</b> - potężnego środowiska wykonawczego JavaScript. Stworzyłem interfejs <b>API</b>, który pozwala części klienta aplikacji komunikować się z serwerem i otrzymywać dane w czasie rzeczywistym. Jako bazę danych wybrałem <b>MongoDB</b>, jedno z wiodących systemów <b>NoSQL</b>, do efektywnego przechowywania i organizacji danych.
          </p>
          <p className="main__text">
            Ten projekt nie tylko demonstruje moją ekspertyzę w zakresie front-endu i back-endu, ale także pokazuje moją zdolność do rozumienia i stosowania nowoczesnych narzędzi i technologii. Jestem przekonany, że ten projekt jest przykładem mojej gotowości zawodowej i mojej pasji do tworzenia wysokiej jakości aplikacji internetowych.
          </p>
          <p className="main__text py-5">
            <b>Dziękuję</b> za odwiedzenie głównej strony i mam nadzieję, że spodoba się Państwu mój projekt!
          </p>

          <p className="main__text">
            P.S. testowe dane do logowania: <b>username: test password: test </b> lub zapraszam do założenia konta
          </p>
        </Row>
      </Container>
    </main>
  )
}

const LoggedLayout = () => {
  return (
    <main className='main'>
      <AppNav
      // onChoose={this.chooseDataBase}
      // ourChoose={this.state.ourChoose}
      />
      <AppForm
      // onChoose={this.state.ourChoose}
      />
      <AppList
      // data={notes}
      // onChoose={this.state.ourChoose}
      // deleteItem={this.props.deleteItem}
      // checkItem={this.props.checkItem}
      />
    </main>
  )
}

const Main = () => {
  const logged = useSelector(state => state.client.logged);

  return (
    logged ? LoggedLayout() : notLoggedLayout()
  );
}

export default Main;