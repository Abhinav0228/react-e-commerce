import React from 'react';
import { useState } from "react";

function Practice () {
    const [age, setAge] = useState(0);
    const [ inputChange, setInputChange ] = useState("");
    // const [ showText, setShowText ] = useState(true);
    const [ color, setColor ] = useState("red");
    function incAge () {
        setAge(age + 1);
    }
    function changeInput (event) {
        setInputChange(event.target.value);
    }
        
    return (
        <>
            {age}
            <button onClick={incAge}>Add</button>
            <input type="text" className='border' onChange={changeInput} />
            {inputChange}
            <button onClick={()=> {
                setColor(color === "red" ? "blue" : "red");
            }}>Show/Hide</button>
           <p style={{color: color}}>asfas</p>
        </>
    )
}

export default Practice;