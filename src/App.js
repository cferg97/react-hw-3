import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import scifi from '../src/data/scifi.json'


function App() {
  return (
    <div className="App d-flex text-center flex-column">
      <WarningSign text="SALE NOW ON!">
      </WarningSign>

      <h1>Hello <MyBadge color="primary" text="Strive Books!"/></h1>

      
      <Container className="d-flex text-center justify-content-center">
      <BookList ListOfBooks = {scifi}/>
      </Container>
    </div>
  );
}

export default App;
