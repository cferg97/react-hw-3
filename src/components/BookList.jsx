import SingleBook from "./SingleBook";
import { Row, Col, Container } from "react-bootstrap"
import { Component } from "react"

function FilterList () {
    
}

class BookList extends Component {
    render(){
    return (
        <Container>
            <Row>
                {this.props.ListOfBooks.map((book) => (
                    <Col sm={6} md={4}><SingleBook book={book} /></Col>
                ))}
            </Row>
        </Container>
    )
    }
}
 
export default BookList;