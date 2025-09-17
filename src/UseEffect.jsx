import { useEffect, useState } from "react"

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1);
    }
    useEffect(() => {
        console.log("UseEffect Called")
    })
    return (
        <>
            <h1>UseEffect</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Increment</button>
        </>
    )
}

export default UseEffect