import Badge from "react-bootstrap/Badge"

const MyBadge = (props) => {
    return ( 
        <Badge variant={props.color}>{props.currency}{props.text}</Badge>
     );
}
 
export default MyBadge;