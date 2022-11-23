import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import scifi from '../src/data/scifi.json'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App d-flex text-center flex-column">
      <WarningSign text="SALE NOW ON!">
      </WarningSign>

      <h1>Hello! <MyBadge color="success" text="Badge!"/></h1>

      <Container className='d-flex justify-content-center mb-4'>
        <SearchBar />
      </Container>
      
      <Container className="d-flex text-center justify-items-center">
      <BookList ListOfBooks = {scifi}/>
      </Container>
    </div>
  );
}

export default App;
