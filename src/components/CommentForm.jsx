import { Component } from "react"
import { Form, Button } from "react-bootstrap"

class CommentForm extends Component {
    state = {
        comment: {
            rate: "1",
            comment: "",
            elementId: this.props.book
        }
    }


onChangeHandler = (value, fieldToSet) => {
    this.setState({
        comment: {...this.state.comment,
        [fieldToSet]: value,
        }
    })
}

onSubmitHandler = async (e) => {
    e.preventDefault()
    try{
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments',
            {
              method: 'POST',
              body: JSON.stringify({
                comment: this.state.comment.comment,
                rate: this.state.comment.rate,
                elementId: this.props.asin
              }),
              headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2NjkyOTMwOTgsImV4cCI6MTY3MDUwMjY5OH0.jUVd4New538rXXxi7q_euMzWMkjPDLnD4ivPiyaRpXc",
                'Content-Type': 'application/json'
                
              },
            })
            console.log(response)
            if (response.ok) {
                alert("Your comment has been posted")
                this.setState({
                    comment: {
                        rate: "1",
                        comment: "",
                        elementId: this.props.asin
                    }
                })
            }
            else{
                console.log("Something went wrong")
            }
    }
    catch (error) {
        console.log(error)
    }
}


render() {
    return(
    <div>
    <Form onSubmit={this.onSubmitHandler}>
        <Form.Group>
        <Form.Label>Select a rating</Form.Label>
        <Form.Control
            as="select" 
            single
            value={this.state.comment.rate}
            onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
        >
       
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control 
            as="textarea" 
            rows={3}
            value={this.state.comment.comment}
            onChange={(e) => this.onChangeHandler(e.target.value, "comment")}
            />
        </Form.Group>
        <Button variant="warning" type="submit">
         Post Comment
        </Button>
    </Form>
    </div>
    )
}

}

export default CommentForm;