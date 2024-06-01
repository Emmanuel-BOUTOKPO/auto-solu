import React, { useContext } from "react";
import { BsCart} from 'react-icons/bs';
import { Link} from 'react-router-dom';
import "./navbar.css";

import { FaCarCrash} from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const  Navbar = () => {
    const { getCartItemCount } = useContext(CartContext);
    return (
       <header className="header_section">
  <div className="container">
    <nav className="navbar navbar-expand-lg custom_nav-container ">
      <Link className="navbar-brand" to="/">
      <div className="logo">
          <div className="d-flex flex-row align-items-center justify-content-start">
            <div><FaCarCrash className='cars' /></div>
            <div>Auto-Solu.</div>
          </div>
      </div>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">CASA<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">INIETTORI DIESEL</Link>
          </li>
          {/* {
            (users && users.role === "ADMIN") ?
            <li className="nav-item">
              <Link className="nav-link" to="/post">Post</Link>
            </li>
           :
             <Outlet />
          } */}
          <li className="nav-item">
              <Link className="nav-link" to="/post">Post</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">POMPE DI INIEZIONE</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/shop">TURBINE</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">CONTATTACI</Link>
          </li>
          {/* {
               (users === null || users === null) ?
               <li className="nav-item">
                  <Link className="nav-link" to="/login"><div><FaRegUser className='svg'/>Login</div></Link>
               </li> :
               <li className="nav-item">
               <Link className="nav-link" to="/login" onClick={handleLogout}><div><FaSignOutAlt/>Log out</div></Link>
            </li>
                
            } */}
         
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
               <BsCart id="hand-bag"/>
               <div id="number-of-products">{getCartItemCount()}</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>

    )
};

export default Navbar;
