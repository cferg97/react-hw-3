import SingleBook from "./SingleBook";
import { Row, Col, Container, Form, FormControl } from "react-bootstrap";
import { Component } from "react";
import CommentsSection from "./CommentsSection";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  changeSelectedBook = (newValue) => {
    this.setState({
      selectedBook: newValue
    })
  }

  render() {
    return (
      <Container className="text-center">
        <Form className="p-5">
          <FormControl
            type="search"
            placeholder="Search for Books"
            className="mr-2 text-center"
            aria-label="Search"
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
        </Form>
        <h2 className="mt-2">Best Sellers</h2>
        <Row>
          <Col md={6}>
            {this.props.ListOfBooks.filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            ).map((book) => (
              <Col md={6} key={book.asin} className="mt-2 mb-2">
                <SingleBook
                  book={book}
                  selectedBook={this.changeSelectedBook}
                  changeSelectedBook={this.state.selectedBook}
                />
              </Col>
            ))}
          </Col>
          <Col md={6}>
            <CommentsSection selectedBook={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookList;
