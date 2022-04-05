import { ListGroup } from "react-bootstrap";


const Task = (props) => {
    return ( 
        <ListGroup.Item>
            <ul>
                <li className="list-group-item mt-3">Title: {props.title}</li>
                <li className="list-group-item ">Description: {props.desc}</li>
            </ul>
         </ListGroup.Item>
     );
}
 
export default Task;