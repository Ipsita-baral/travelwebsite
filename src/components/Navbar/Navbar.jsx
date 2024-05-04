import './navbar.css'
import { MdOutlineModeOfTravel } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div className="navbarScetion">
                <div className="header d-flex">
                    <div className="logo">
                        <a href="#" className="logoo ">
                            <h1><MdOutlineModeOfTravel className="icon" />Travel.</h1>
                        </a>
                    </div>

                    <div className="nav-item">
                        <ul className='navList d-flex gap-3'>
                            <li className='items'>
                                <a href='/' className='navLink'>Home</a>
                            </li>
                            <li className='items'>
                                <a href='#' className='navLink'>Shop</a>
                            </li>
                            <li className='items'>
                                <a href='/about' className='navLink'>About</a>
                            </li>
                            <li className='items'>
                                <a href='#' className='navLink'>Pages</a>
                            </li>
                            <li className='items'>
                                <a href='#' className='navLink'>News</a>
                            </li>
                            <li className='items'>
                                <a href='#' className='navLink'>Contact</a>
                            </li>

                        </ul>

                    </div>
                    <div>

                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>
                    </div>
                </div>
               
            </div>
        </>
    )
}
export default Navbar;