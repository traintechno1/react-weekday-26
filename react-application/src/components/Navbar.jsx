import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to=''>Technogeeks</NavLink>
                    <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={({isActive})=> (isActive ? 'nav-link nav-link-active': 'nav-link')} to='cars'>
                            Cars
                        </NavLink>
                        <NavLink className={({isActive})=> (isActive ? 'nav-link nav-link-active': 'nav-link')} to='add-movie'>
                            AddMovie
                        </NavLink>
                        <NavLink className={({isActive})=> (isActive ? 'nav-link nav-link-active': 'nav-link')} to='side-effect'>
                            SideEffect
                        </NavLink>
                        <NavLink className={({isActive})=> (isActive ? 'nav-link nav-link-active': 'nav-link')} to='increment'>
                            Counter
                        </NavLink>
                        <NavLink className={({isActive})=> (isActive ? 'nav-link nav-link-active': 'nav-link')} to='users'>
                            Users
                        </NavLink>
                        <NavLink className={({isActive})=> (isActive ? 'nav-link nav-link-active': 'nav-link')} to='about/company'>
                            About
                        </NavLink>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;