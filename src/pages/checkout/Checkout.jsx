import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './checkout.css'
import BackTop from '../../components/backToTop/BackTop'
const Checkout = () => {
    return (
        <>
            <Navbar />
            <div className="super_container">
                {/* Header */}
               
                <div className="super_container_inner">
                    <div className="super_overlay" />
                    {/* Home */}
                    <div className="shopHome">
                        <div className="intro-excerpt">
                            <h1>Découvrez nos pièces détachées </h1>
                        </div>
                    </div>
                    <div className="checkout">
  <div className="container">
    <div className="row">
      {/* Billing */}
      <div className="col-lg-6">
        <div className="billing">
          <div className="checkout_title">Billing</div>
          <div className="checkout_form_container">
            <form action="#" id="checkout_form" className="checkout_form">
              <div className="row">
                <div className="col-lg-6">
                  {/* Name */}
                  <input type="text" id="checkout_name" className="checkout_input" placeholder="First Name" required="required" />
                </div>
                <div className="col-lg-6">
                  {/* Last Name */}
                  <input type="text" id="checkout_last_name" className="checkout_input" placeholder="Last Name" required="required" />
                </div>
              </div>
              <div>
                {/* Company */}
                <input type="text" id="checkout_company" placeholder="Company" className="checkout_input" />
              </div>
              <div>
                {/* Country */}
                <select name="checkout_country" id="checkout_country" className="dropdown_item_select checkout_input" require="required">
                  <option>Country</option>
                  <option>Lithuania</option>
                  <option>Sweden</option>
                  <option>UK</option>
                  <option>Italy</option>
                </select>
              </div>
              <div>
                {/* Address */}
                <input type="text" id="checkout_address" className="checkout_input" placeholder="Address Line 1" required="required" />
                <input type="text" id="checkout_address_2" className="checkout_input checkout_address_2" placeholder="Address Line 2" required="required" />
              </div>
              <div>
                {/* Zipcode */}
                <input type="text" id="checkout_zipcode" className="checkout_input" placeholder="Zip Code" required="required" />
              </div>
              <div>
                {/* City / Town */}
                <select name="checkout_city" id="checkout_city" className="dropdown_item_select checkout_input" require="required">
                  <option>City / Town</option>
                  <option>City</option>
                  <option>City</option>
                  <option>City</option>
                  <option>City</option>
                </select>
              </div>
              <div>
                {/* Province */}
                <select name="checkout_province" id="checkout_province" className="dropdown_item_select checkout_input" require="required">
                  <option>Province</option>
                  <option>Province</option>
                  <option>Province</option>
                  <option>Province</option>
                  <option>Province</option>
                </select>
              </div>
              <div>
                {/* Phone no */}
                <input type="phone" id="checkout_phone" className="checkout_input" placeholder="Phone No." required="required" />
              </div>
              <div>
                {/* Email */}
                <input type="phone" id="checkout_email" className="checkout_input" placeholder="Email" required="required" />
              </div>
              <div className="checkout_extra">
                <ul>
                  <li className="billing_info d-flex flex-row align-items-center justify-content-start">
                    <label className="checkbox_container">
                      <input type="checkbox" id="cb_1" name="billing_checkbox" className="billing_checkbox" />
                      <span className="checkbox_mark" />
                      <span className="checkbox_text">Terms and conditions</span>
                    </label>
                  </li>
                  <li className="billing_info d-flex flex-row align-items-center justify-content-start">
                    <label className="checkbox_container">
                      <input type="checkbox" id="cb_2" name="billing_checkbox" className="billing_checkbox" />
                      <span className="checkbox_mark" />
                      <span className="checkbox_text">Create an account</span>
                    </label>
                  </li>
                  <li className="billing_info d-flex flex-row align-items-center justify-content-start">
                    <label className="checkbox_container">
                      <input type="checkbox" id="cb_3" name="billing_checkbox" className="billing_checkbox" />
                      <span className="checkbox_mark" />
                      <span className="checkbox_text">Subscribe to our newsletter</span>
                    </label>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Cart Total */}
      <div className="col-lg-6 cart_col">
        <div className="cart_total">
          <div className="cart_extra_content cart_extra_total">
            <div className="checkout_title">Cart Total</div>
            <ul className="cart_extra_total_list">
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div className="cart_extra_total_title">Subtotal</div>
                <div className="cart_extra_total_value ml-auto">$29.90</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div className="cart_extra_total_title">Shipping</div>
                <div className="cart_extra_total_value ml-auto">Free</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div className="cart_extra_total_title">Total</div>
                <div className="cart_extra_total_value ml-auto">$29.90</div>
              </li>
            </ul>
            <div className="payment_options">
              <div className="checkout_title">Payment</div>
              <ul>
                <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                  <label className="radio_container">
                    <input type="radio" id="radio_1" name="payment_radio" className="payment_radio" />
                    <span className="radio_mark" />
                    <span className="radio_text">Paypal</span>
                  </label>
                </li>
                <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                  <label className="radio_container">
                    <input type="radio" id="radio_2" name="payment_radio" className="payment_radio" />
                    <span className="radio_mark" />
                    <span className="radio_text">Cash on Delivery</span>
                  </label>
                </li>
                <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                  <label className="radio_container">
                    <input type="radio" id="radio_3" name="payment_radio" className="payment_radio" defaultChecked />
                    <span className="radio_mark" />
                    <span className="radio_text">Credit Card</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="cart_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
            </div>
            <div className="checkout_button trans_200"><a href="checkout.html">place order</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
            <Footer />
            <BackTop />
            <Whatsapp />
        </>
    )
}

export default Checkout