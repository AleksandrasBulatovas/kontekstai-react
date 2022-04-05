import { useContext, useState } from "react";
import React from "react";

const AppContext = React.createContext() // kontekstas

const AppProvider = ({ children }) => { // tiekejas
    const [tasks, setTasks] = useState([
        {
            title: 'Learn react',
            desc: "Very important"
        }

    ]);

    const [isOpen, setIsOpen] = useState(false)

    const addTask = (data) => {
        setTasks((prevData) => {
            return [data, ...prevData]
        })
    }

    const openForm = ()=>{
        setIsOpen(true)
    }
    const closedForm = () =>{
        setIsOpen(false)
    }
    return(
        <AppContext.Provider value={{
            tasks,
            addTask,
            isOpen,
            openForm,
            closedForm
        }}>
            {children}
        </AppContext.Provider> 
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}