import { useState } from "react";

const IncrementDecrement = () => {

    // This is not a ordinary JS Variable insteady it is a react state variable
    // which rerenders(reprint) the UI of the component when the value of this variable gets
    // changed by using setter method that is the second parameter here
    // Value of the state variable can not be directly assigned instead it should always be changed
    // using setter method.
    let [count, setCount] = useState(0);

    const increment = () =>{
        setCount(v=> v + 1);
    }
    
    const decrement = () =>{
        setCount(v=> v - 1);
    }

    return(
        <>
            <h3>Counter</h3>
            <button onClick={increment}> + </button>
            <b>Count : {count}</b>
            <button onClick={decrement}> - </button>
        </>
    )
}

export default IncrementDecrement;