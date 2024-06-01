import React, { useContext } from 'react'
import "./cart.css"
import { Link} from 'react-router-dom'

import ZeroProduct from '../../components/notFound/ZeroProduct'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { CartContext } from '../../context/CartContext'
const Cart = () => {
  
    const { cart, incrementQuantity, decrementQuantity, removeFromCart, totalPrice } = useContext(CartContext);

  const defaultStyle = {
    color: "#9d174d",
    cursor: "pointer"
  }
  
  const otherStyle = {
    color: "#dcd9d9",
    cursor: "default"
  }

  console.log(cart);
  return (
    <>
    <Navbar />
    <section className="inner_page_head">
    <div className="container_fuild">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <h3>Your cart</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="before-footer-section">
      {
         cart.length === 0 ? (
            <ZeroProduct />
        ) : (
  <div className="container">
    <div className="row mb-5">
      <form className="col-md-12" method="post">
        <div className="site-blocks-table">
          <table className="table">
            <thead>
              <tr>
                <th className="product-thumbnail">Image</th>
                <th className="product-name">Product</th>
                <th className="product-price">Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-total">Total</th>
                <th className="product-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((eachProduct, index) => (

              <tr key={index}>
                <td className="product-thumbnail">
                  <img src={eachProduct.imgProd} alt={eachProduct.nom} className="img-fluid" />
                </td>
                <td className="product-name">
                  <h2 className="h5 text-black">{eachProduct.nom}</h2>
                </td>
                <td>{eachProduct.prix}</td>
                <td>
                  <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: 120}}>
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-black decrease" type="button" onClick={() => (decrementQuantity(eachProduct.id))} style={eachProduct.quantity < 2 ? otherStyle : defaultStyle}>−</button>
                    </div>
                    <input type="text" className="form-control text-center quantity-amount" readOnly value={eachProduct.quantity}  aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <div className="input-group-append">
                      <button className="btn btn-outline-black increase" type="button" onClick={() => (incrementQuantity(eachProduct))}>+</button>
                    </div>
                  </div>
                </td>
                <td>{eachProduct.prix * eachProduct.quantity}$</td>
                <td><Link to="#" className="btn btn-black btn-sm"  onClick={() => (removeFromCart(eachProduct.id))}>X</Link></td>
              </tr>
                ))

              }
            </tbody>
          </table>
        </div>
      </form>
    </div>
    <div className="row">
      <div className="col-md-6 pl-5">
        <div className="row justify-content-end">
          <div className="col-md-4"></div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12 text-right border-bottom mb-5">
                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <span className="text-black">Subtotal</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">{(totalPrice)}$</strong>
              </div>
            </div>
            <div className="row mb-5">
              
              <div className="col-md-6">
                <span className="text-black">Total</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">{(totalPrice)} $</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
              <button className='btn btn-success btn-block bg'  type='button'>Commander</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
      }
</div>
<Footer />
    </>
  )
}

export default Cart