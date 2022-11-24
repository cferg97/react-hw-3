import { Button } from "react-bootstrap";
import { Component } from "react";

class DeleteComment extends Component {
  state = {
    commentID: this.props.commentID,
  };


deleteComment = async (event) => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.state.commentID}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2NjkyOTMwOTgsImV4cCI6MTY3MDUwMjY5OH0.jUVd4New538rXXxi7q_euMzWMkjPDLnD4ivPiyaRpXc",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("comment deleted successfully");
      this.props.fetchComments()
    } else {
      alert("couldn't delete comment");
    }
  } catch (error) {
    console.log(error);
  }
}

render() {
    return(
        <>
            <Button variant="danger" onClick={this.deleteComment}>Delete</Button>
        </>
    )
}

}
export default DeleteComment;
