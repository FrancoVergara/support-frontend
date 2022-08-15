import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink 
                            to="/"
                            className="nav-link text-decoration-none text-dark text-capitalize ps-3 pe-3 border-end border-secondary" 
                        >
                            {({ isActive }) => (
                                <p className={`mb-0 ${ isActive ? 'cyan' : '' }`}>Noticias</p>
                            )} 
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            to="/credentials"
                            className="nav-link text-decoration-none text-dark text-capitalize ps-3 pe-3 border-end border-secondary" 
                        >
                            {({ isActive }) => (
                                <p className={`mb-0 ${ isActive ? 'cyan' : '' }`}>Credenciales</p>
                            )} 
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            to="/solutions"
                            className="nav-link text-decoration-none text-dark text-capitalize ps-3 pe-3" 
                        >
                            {({ isActive }) => (
                                <p className={`mb-0 ${ isActive ? 'cyan' : '' }`}>Soluciones</p>
                            )} 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;