import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const SearchBar = () => {
    return (  
    <Form className="d-flex" onSubmit={this.onSubmitHandler}>
    <Form.Control
      type="search"
      placeholder="Search for books"
      className="me-2"
      aria-label="Search"
    />
    <Button type="submit" variant="outline-primary">Search</Button>
  </Form> );
}
 
export default SearchBar;