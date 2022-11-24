import { ListGroup, Spinner, Button } from "react-bootstrap"
import { Component } from "react"
import Alerts from "./AlertComponent"
import CommentForm from "./CommentForm"

class CommentsSection extends Component {

    state = {
        comments: [],
        isLoading: true,
        isError: false,
        commentId: ""
    }

    fetchComments = async () => {
        try{
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`, {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2NjkyOTMwOTgsImV4cCI6MTY3MDUwMjY5OH0.jUVd4New538rXXxi7q_euMzWMkjPDLnD4ivPiyaRpXc"
                }
                })
            if (response.ok){
                let data = await response.json()
                setTimeout(() => {
                this.setState({
                    comments: data,
                    isLoading: false
                })
            }, 1000)
            }
            else {
                console.log("there was a problem")
                setTimeout(() => {
                    this.setState({
                        isLoading: false,
                        isError: true
                    })
                }, 1000)
            }
        }
        catch (error){
            console.log(error)
            this.setState({
                isLoading: false,
                isError: true
            })
        }
    }

    deleteComments = async (props) => {
        try{
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
                {
                  method: 'DELETE',
                  headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2NjkyOTMwOTgsImV4cCI6MTY3MDUwMjY5OH0.jUVd4New538rXXxi7q_euMzWMkjPDLnD4ivPiyaRpXc",
                    
                  }
                })
    }
    catch (error){
        console.log(error)
    }
}

    componentDidMount(){
        this.fetchComments(this.props.id)
    }

    render(){
    return (
        <div>
            {this.state.isLoading && (
                <Spinner
                animation="border"
                role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
            {this.state.isError && (
                <Alerts/>
            )}
        <ListGroup variant = "flush" className="mt-2">
            {this.state.comments.map((c) => (
                <ListGroup.Item key={c._id} variant="info">
                    {c.rate} out of 5
                    <p>{c.comment}</p>
                    <Button variant="danger">Delete</Button>

                </ListGroup.Item>
            ))}
        </ListGroup>
        <CommentForm />
        </div> 
     );
    }
}
 
export default CommentsSection;