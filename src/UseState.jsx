import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1);
    }
    console.log(useState());
    return (
        <>
            <h1>Use State</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Increment</button>
        </>
    )
}

export default UseState