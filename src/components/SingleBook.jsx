import { Component } from "react"
import Card from "react-bootstrap/Card"
import MyBadge from "./MyBadge";

class SingleBook extends Component {
    state = {
        selectedBook: false
    }

    render(){
    return (<Card onClick = {() => { console.log("clicked", this.props.book)
     this.setState({selectedBook: true})}} bg="secondary" text="light" style={{height: "34rem"}} className="mb-3 mt-2">
        <Card.Img variant="top" src={this.props.book.img} key={this.props.book.asin} className="imgTop"/>
            <Card.Body>
                <Card.Header>
                    {this.props.book.title}
                </Card.Header>
            </Card.Body>
            <Card.Footer>
                <MyBadge color="warning" currency="£" text={this.props.book.price}/>
            </Card.Footer>
    </Card>)

}
}
 
export default SingleBook;