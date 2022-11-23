import SingleBook from "./SingleBook";
import { Row, Col, Container, Form, FormControl } from "react-bootstrap"
import { Component } from "react"


class BookList extends Component {

    state = {
        searchQuery: ""
    }


    render(){
    return (
        <Container>
            <Form className="d-flex w-100">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form>
              <Row>
          {this.props.ListOfBooks
            .filter((element) =>
              element.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((element) => (
              <Col xs={4} md={3} className="mt-2 mb-2">
                <SingleBook book={element} />
              </Col>
            ))}
        </Row>
        </Container>
    )
    }
}
export default BookList;

