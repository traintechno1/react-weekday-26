import { NavLink, Outlet } from "react-router-dom";
import '../../css/About.css';
const About = () =>{
    return(
        <>
            <h3>About</h3>
            <div className="d-flex gap-3 mb-2">
                <NavLink 
                    className={({isActive})=> (isActive ? 'text-decoration-none custom-nav-link custom-active-link': 'text-decoration-none custom-nav-link')}
                    to='company'>
                    Company
                </NavLink>
                <NavLink 
                    className={({isActive})=> (isActive ? 'text-decoration-none custom-nav-link custom-active-link': 'text-decoration-none custom-nav-link')}
                    to='products'>
                    Products
                </NavLink>
                <NavLink 
                    className={({isActive})=> (isActive ? 'text-decoration-none custom-nav-link custom-active-link': 'text-decoration-none custom-nav-link')}
                    to='customers'>
                    Customers
                </NavLink>
            </div>
            <div className="outlet-container">
                <Outlet />
            </div>
        </>
    )
}
export default About;