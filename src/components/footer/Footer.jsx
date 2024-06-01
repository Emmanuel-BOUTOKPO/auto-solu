import React from 'react'
import { FaCarCrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
 <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="full">
          <div className="logo_footer">
          <Link className="navbar-brands" to="/">
      <div className="logo">
          <div className="d-flex flex-row align-items-center justify-content-start">
            <div><FaCarCrash className='car' /></div>
            <div>Auto-Solu.</div>
          </div>
      </div>
      </Link>
          </div>
          <div className="information_f">
            <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
            <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
            <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <div className="widget_menu">
                  <h3>Menu</h3>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="widget_menu">
                  <h3>Account</h3>
                  <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/shop">Shopping</Link></li>
                    <li><Link to="/service">Widget</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>     
          <div className="col-md-5">
            <div className="widget_menu">
              <h3>Newsletter</h3>
              <div className="information_f">
                <p>Subscribe by our newsletter and get update protidin.</p>
              </div>
              <div className="form_sub">
                <form>
                  <fieldset>
                    <div className="field">
                      <input type="email" placeholder="Enter Your Mail" name="email" />
                      <input type="submit" defaultValue="Subscribe" />
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer