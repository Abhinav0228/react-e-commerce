import { useState } from "react";

function QuantitySelector () {
    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1)

    }
    const dec = () => {
        if ( count > 0 ) {
            setCount(count - 1)
        }
    }
    return (
        <>
            <div className="flex gap-4 rounded-md bg-gray-200 border-2 border-gray-500 w-min items-center py-0 px-4 mt-2">
                <button onClick={dec} className="text-4xl">-</button>
                <p className="text-xl">{count}</p>
                <button onClick={inc} className="text-2xl">+</button>
            </div>
        </>
    )
}
export default QuantitySelector;