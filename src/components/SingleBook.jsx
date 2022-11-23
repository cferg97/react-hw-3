import { Component } from "react"
import Card from "react-bootstrap/Card"
import MyBadge from "./MyBadge";

class SingleBook extends Component {
    render(){
    return (<Card bg="secondary" text="light" style={{height: "34rem"}} className="mb-3">
        <Card.Img variant="top" src={this.props.book.img} className="imgTop"/>
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