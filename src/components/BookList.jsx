import SingleBook from "./SingleBook";
import { Row, Col, Container, Form, FormControl } from "react-bootstrap"
import { Component } from "react"


class BookList extends Component {

    state = {
        searchQuery: ""
    }


    render(){
    return (
        <Container className="text-center">
            <Form className="p-5">
                <FormControl
                  type="search"
                  placeholder="Search for Books"
                  className="mr-2 text-center"
                  aria-label="Search"
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form>
              <h2 className="mt-2">Best Sellers</h2>
              <Row>
          {this.props.ListOfBooks
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book) => (
              <Col key={book.asin} sm={6} xs={12} md={4} lg={3} className="mt-2 mb-2">
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>
        </Container>
    )
    }
}
export default BookList;

