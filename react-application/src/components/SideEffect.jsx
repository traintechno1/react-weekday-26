import { useEffect, useState } from "react";

const SideEffect = () =>{

    let [counter, setCounter] = useState(0);

    useEffect(()=>{
        console.log("use Effect got called");
    }, [])

    useEffect(()=>{
        console.log("Counter Value Changed", counter);
    }, [counter])

    const increment = () =>{
        setCounter(counter + 1)
    }

    return(
        <>
            <h3>Side Effect</h3>
            <h2>Count: {counter}</h2>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default SideEffect;