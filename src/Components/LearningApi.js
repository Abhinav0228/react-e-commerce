import React, { useEffect, useState } from 'react'
import Axios  from 'axios'
export const LearningApi = () => {
    // fetch("https://catfact.ninja/fact")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //     });

    const [catfact, setCatFact] = useState("");

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact")
        .then((res) => {
            // console.log(res.data);
            setCatFact(res.data.fact);
        });
    }

    useEffect(() => {
        fetchCatFact();
    }, []);
  return (
    
    <>
        <div className="wrapper">
            <button onClick={fetchCatFact} className='border rounded-md p-3'>Generate Cat Fact</button>
            <p className='bg-red-50'>{catfact}</p>
        </div>
    </>
  )
}

export default LearningApi
