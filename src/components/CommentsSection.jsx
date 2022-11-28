import { ListGroup, Spinner, Button } from "react-bootstrap";
import { Component } from "react";
import Alerts from "./AlertComponent";
import CommentForm from "./CommentForm";
import DeleteComment from "./deleteComment";


class CommentsSection extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.selectedBook}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2NjkyOTMwOTgsImV4cCI6MTY3MDUwMjY5OH0.jUVd4New538rXXxi7q_euMzWMkjPDLnD4ivPiyaRpXc",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          comments: data,
          isLoading: false,
        });
        
      } else {
        console.log("there was a problem");
        setTimeout(() => {
          this.setState({
            isLoading: false,
            isError: true,
          });
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };



  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.selectedBook !== this.props.selectedBook) {
      this.fetchComments()
    }
  }


  render() {
    return (
      <div>
        {this.state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {this.state.isError && <Alerts />}
        {this.props.selectedBook && (
        <ListGroup variant="flush" className="mt-2">
          {this.state.comments.map((c) => (
            <ListGroup.Item key={c._id} variant="info">
              {c.rate} out of 5<p>{c.comment}</p>
              <DeleteComment commentID={c._id} fetchComments={this.fetchComments}/>
            </ListGroup.Item>
          ))}
        </ListGroup>)}
        <CommentForm fetchComments={this.fetchComments} selectedBook={this.props.selectedBook}/>
      </div>
    );
  }
}

export default CommentsSection;
