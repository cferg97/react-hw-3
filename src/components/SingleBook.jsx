import { Component } from "react"
import Card from "react-bootstrap/Card"
import MyBadge from "./MyBadge";
import CommentsSection from "./CommentsSection";

class SingleBook extends Component {
    state = {
        selectedBook: false,
    }

    toggleBook = () => {
        this.setState(prevState => ({ selectedBook: !prevState.selectedBook }))
    }

    
    render(){
    const { selectedBook } = this.state
    return (<Card className={`${selectedBook ? "card-border mb-3 mt-2 card-hover card-grow" : "mb-3 mt-2 card-hover"}`} bg="secondary" text="light">
        <Card.Img onClick = {this.toggleBook} variant="top" src={this.props.book.img} key={this.props.book.asin} className="imgTop"/>
            <Card.Body>
                <Card.Header>
                    {this.props.book.title}
                </Card.Header>
            </Card.Body>
            <Card.Footer>
                <MyBadge color="warning" currency="£" text={this.props.book.price}/>
                {this.state.selectedBook && (
                <CommentsSection id={this.props.book.asin}/>
            )}
            </Card.Footer>
            
    </Card>
    
    )

}
}
 
export default SingleBook;