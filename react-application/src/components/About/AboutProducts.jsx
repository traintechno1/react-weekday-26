
import Car1 from '../../assets/images/car1.jpg';
import Car2 from '../../assets/images/car2.jpg';
import Car3 from '../../assets/images/car3.jpg';
import Car4 from '../../assets/images/car4.jpg';
import Car5 from '../../assets/images/car5.jpg';
import Car6 from '../../assets/images/car6.jpg';
import Car7 from '../../assets/images/car7.jpg';

const AboutProducts = () =>{
    return(
        <>
            <h3 className="heading">About Products</h3>
            <div className='image-container about-section'>
                <img className='image' src={Car1} />
                <img className='image' src={Car2} />
                <img className='image' src={Car3} />
                <img className='image' src={Car4} />
                <img className='image' src={Car5} />
                <img className='image' src={Car6} />
                <img className='image' src={Car7} />
            </div>
        </>
    )
}
export default AboutProducts;