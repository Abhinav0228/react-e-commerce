import React from 'react';
import { useState } from "react";
import Task from './Task';
function Todo () {
    const [ todoList, setTodoList ] = useState([]);
    const [ newtask, setNewTask ] = useState("");
    
    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newtask,
            completed: false,
        };

        setTodoList([...todoList, task]);
        
    }

    // const deleteTask = (taskName) => {
    //     const newTodoList = todoList.filter((task) => {
    //         return task !== taskName;   
    //     })
    //     setTodoList(newTodoList);
    // }

    const deleteTask = (id) => {
        setTodoList (todoList.filter((task) => task.id !== id));
    }

    const completeTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: true };
                } else {
                    return task;
                }
            })      
        )
    }
    

     return (
        <>
            <div className="todoHeader py-4 px-10">
                <h2 className="font-sans text-3xl font-semibold mb-6">Your Todo's</h2>
                <div className="addTask">
                    <input onChange={handleChange} className='border shadow-lg p-2 rounded-lg me-3' type="text" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTask}>Add Task</button> 
                </div>
                <div className="list">
                    {todoList.map((task) => {
                        return (
                            <Task 
                            taskName= {task.taskName}
                             id={task.id }
                              deleteTask={deleteTask}
                              completed={task.completed}
                               completeTask = {completeTask}/>

                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Todo;