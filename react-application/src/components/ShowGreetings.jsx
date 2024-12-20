
const ShowGreetings = ()=> {
    
    const personName = "Dipika Sugandh";

    const getArea = (radius) =>{
        return 3.14 * radius * radius;
    }
    
    return(
        <>
           <h3> Good Morning {personName} !!</h3>
           <div>{ 100 * 300 }</div>
           <b>Area of a circle = { getArea(30) }</b>
        </>
    )

}
export default ShowGreetings;