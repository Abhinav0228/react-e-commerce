 const Task = (props) => {
    
    return (
        <div className="flex gap-3 items-center" style={{ backgroundColor: props.completed ? "green" : "white"}}>
            <h1 className='text-3xl'>{props.taskName}</h1>
            <button onClick={() => {
                props.deleteTask(props.id);
            }}>X</button>
            <button onClick={() => props.completeTask(props.id)}>complete</button>
                    </div>
    )
}
export default Task;