import {Container, ListGroup, Button} from "react-bootstrap";
import {useGlobalContext} from "../../context/TasksContext"
import AddTask from "../addTask/AddTask";
import Task from "../task/Task";

const Tasks = () => {
    const {tasks, isOpen, openForm} = useGlobalContext(); //Gavejas

    console.log(tasks)
    return(
        <Container>
            <h2 className="m-5 text-center">Tasks list</h2>
            <div className="m-3 text-center">
                <Button onClick={openForm} className="mx-auto">Add task</Button>
            </div>
            {(isOpen) && <AddTask />}
            <ListGroup>
                {tasks.lenght && tasks.map((task,i) => <Task
                    key={i}
                    title={task.title}
                    desc={task.desc}
                />)}
            </ListGroup>
        </Container>
    )
}

export default Tasks;