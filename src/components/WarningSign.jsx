import Alert from "react-bootstrap/Alert"
 

const WarningSign = (props) => {
    return ( 
        <Alert key={"danger"} variant={"danger"}>
            {props.text}
        </Alert>
     );
}
 
export default WarningSign;