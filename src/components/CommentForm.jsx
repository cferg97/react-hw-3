import { Component } from "react"
import { Form, Button } from "react-bootstrap"

class CommentForm extends Component {
    state = {
        comment: {
            rate: "1",
            comment: "",
            elementId: this.props.book.asin
        }
    }


onChangeHandler = (value, fieldToSet) => {
    this.setState({
        comment: {...this.state.comment,
        [fieldToSet]: value
        }
    })
}

onSubmitHandler = async (e) => {
    e.preventDefault()
    try{
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments',
            {
              method: 'POST',
              body: JSON.stringify(this.state.comment),
              headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2NjkyOTMwOTgsImV4cCI6MTY3MDUwMjY5OH0.jUVd4New538rXXxi7q_euMzWMkjPDLnD4ivPiyaRpXc"
              },
            })
            console.log(response)
            if (response.ok) {
                alert("Your comment has been posted")
                this.setState({
                    comment: {
                        rate: "1",
                        comment: "",
                        elementId:""
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
        <Form.Group>
        <Form.Label>Select a rating</Form.Label>
        <Form.Control as="select" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
    )
}

}

export default CommentForm;