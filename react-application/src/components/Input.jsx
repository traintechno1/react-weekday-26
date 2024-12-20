import { useState } from "react";

const Input = () =>{
    let [inputValue, setInputValue] = useState('');
    let [value, setValue] = useState('');
    
    const showMessage = (event) =>{
        setInputValue(event.target.value);
    }

    const submit = () =>{
        setValue(inputValue);
    }

    return(
        <>
            <h3>Input Component</h3>
            <input 
                type="text" 
                name="message" 
                placeholder="Enter any message"
                onInput={(e) =>showMessage(e)}
            />
            <button onClick={submit}>Submit</button>
            <h2>
                {value}
            </h2>
        </>
    )
}
export default Input;