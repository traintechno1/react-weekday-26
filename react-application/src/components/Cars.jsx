import "../css/Car.css";
import Car from "./Car";

const Cars = () => {
    let carDetails = [
        {
            carName: 'XUV700',
            brand: 'Mahindra',
            year: '2024',
            plateNo: 'MH14 HT 1435',
            price: 1600000
        },
        {
            carName: '3XO',
            brand: 'Mahindra',
            year: '2023',
            plateNo: 'MH12 MT 1412',
            price: 1100000
        },
        {
            carName: 'Verna',
            brand: 'Hyundai',
            year: '2022',
            plateNo: 'MH16 GH 5733',
            price: 900000
        },
        {
            carName: 'Scorpio',
            brand: 'Mahindra',
            year: '2020',
            plateNo: 'MH04 FJ 9825',
            price: 800000
        },
        {
            carName: 'XUV700',
            brand: 'Mahindra',
            year: '2024',
            plateNo: 'MH14 HT 1435',
            price: 1600000
        }
    ]

    const somethingIsClicked = (data) =>{
        console.log(data, "is Clicked");
    }

    return(
        <div className="car-holder">
            {
                carDetails.map((car,index)=>{
                    return(
                        <Car 
                            car= {car}
                            carIsClicked={somethingIsClicked}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cars;