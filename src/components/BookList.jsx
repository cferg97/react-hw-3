import SingleBook from "./SingleBook";
import { Row, Col, Container, Form, } from "react-bootstrap"
import { Component } from "react"


class BookList extends Component {

    state = {
        searchQuery: "",
        books: this.props.ListOfBooks
    }

    FilterBookList = (value) => {
        this.setState({
            searchQuery: value,
        })

        let searchQuery = this.state.searchQuery
        this.setState({
            books: this.state.books.filter(function (book) {
                return book.title.toLowerCase().includes((searchQuery).toLowerCase())
            })
        })
        console.log(searchQuery)
    }

    render(){
    return (
        <Container>
        <Form.Group>
        <Form.Control
        type="text"
        placeholder="Search for books"
        className="me-2"
        aria-label="Search"
        value={this.state.searchQuery}
        onChange={(event) => this.FilterBookList(event.target.value)}
        />
            </Form.Group>
            <h2>Displaying {this.state.books.length} of {this.props.ListOfBooks.length} </h2>
            <Row>
                {this.state.books.map((book) => (
                    <Col key={book.asin} sm={6} md={4}><SingleBook book={book}/></Col>
                ))}
            </Row>
        </Container>
    )
    }
}
export default BookList;

