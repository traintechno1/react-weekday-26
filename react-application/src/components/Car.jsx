const Car = ({car, carIsClicked})=>{

    const clickHandle = () => {
        carIsClicked(car);
    }

    return(
        <>        
            <div className="car-container">
                <h3 className="heading">Car Name: 
                    {car?.carName}
                </h3>        
                <div>
                    <span className="label"> Brand: </span>
                    {car?.brand}
                 </div>
                <div>
                    <span className="label">Year Of Manufacturing: </span>
                    {car?.year}
                </div>
                <div>
                    <span className="label">Plate No: </span>
                    {car?.plateNo}
                </div>
                <div>
                    <span className="label">Resale Price: </span>
                    {car?.price}
                </div>

                <button onClick={clickHandle}>
                    Click Me
                </button>
            </div>
        </>
    )
}
export default Car;