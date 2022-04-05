import {ListGroup} from "react-bootstrap";

const Task = (props) => {
    return(
        <ListGroup.Item>{props.title}:{props.desc}</ListGroup.Item>
    )
}

export default Task;