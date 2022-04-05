import {useState} from "react";
import React from "react";


const AppContext = React.createContext(); // sukuriamas Contextas
const AppProvider = ({children}) => {  // sukuriamas Tiekejas
    const [tasks, setTasks] = useState([
        {
            title:'Learn React',
            desc:'It is very important'
    }
]); // kuriamas state

    const [isOpen, setIsOpen] = useState(false);

    const addTask = (data) => { // kuriamas state setinancia funkcija
        setTasks((prevData) => {
            return [data,...prevData]
        })
    }

    const openForm = () => {
        setIsOpen(true);
    }
    const closeForm = () => {
        setIsOpen(false);
    }

    return(
        <AppContext.Provider value={{
            tasks,   //issivardinam ka norim share'int
            addTask,
            isOpen,
            openForm,
            closeForm
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}