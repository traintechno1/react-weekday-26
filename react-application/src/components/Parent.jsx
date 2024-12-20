import { Child } from "./Child";

export const Parent = () =>{
    let first_name = "Bhagyashree";
    let last_name = "Pachore";

    return(
        <>
            <h3>Parent Component</h3>
            <div>{first_name} {last_name}</div>
            <Child 
                first_name = {first_name}
                last_name = {last_name}
            />
        </>
    )

}