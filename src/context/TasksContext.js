import {useState, useContext, useReducer} from "react";
import React from "react";
import {newTask, deleteTask} from "../components/actions/TodoActions";
import TodoReducer from "../components/reducers/TodoReducer";


const AppContext = React.createContext(); // sukuriamas Contextas

const initialState = {
    tasks:[
        {
            id:1,
            title: 'Learn React',
            desc: 'It is very important'
        },
        {
            id:2,
            title: 'Learn JS',
            desc: 'It is very important'
        },
        {
            id:3,
            title: 'Learn Node JS',
            desc: 'It is very important'
        }
    ],
    isOpen:false
}

const AppProvider = ({children}) => {  // sukuriamas Tiekejas
     const [state, dispatch] = useReducer(TodoReducer,initialState);

    const addTask = (data) => {
        dispatch(newTask(data))
    }

    const removeTask = (id) => {
        dispatch(deleteTask(id))
    }

    // const [tasks, setTasks] = useState([
//         {
//             title:'Learn React',
//             desc:'It is very important'
//     }
// ]); // kuriamas state

    const [isOpen, setIsOpen] = useState(false);
    const openForm = () => {
        if(isOpen) {
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    }

    // const addTask = (data) => { // kuriamas state setinancia funkcija
    //     setTasks((prevData) => {
    //         return [data,...prevData]
    //     })
    // }

    // const openForm = () => {
    //     setIsOpen(true);
    // }
    // const closeForm = () => {
    //     setIsOpen(false);
    // }

    return(
        <AppContext.Provider value={{
            ...state,
            // tasks,   //issivardinam ka norim share'int
            addTask,
            removeTask,
            isOpen,
            openForm,
            // closeForm
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };