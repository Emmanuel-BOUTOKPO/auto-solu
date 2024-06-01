import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./product.css"
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';
import ZeroProduct from '../notFound/ZeroProduct';
import { BsCart } from 'react-icons/bs';

const Product = () => {
 
    const currentPage = 0;
    const groupsPerPage = 6;
    const startIndex = currentPage * groupsPerPage;
    const endIndex = startIndex + groupsPerPage;
    const { getAllProducts } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const products = getAllProducts();
    return (
        <section className="product_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                       I nostri <span>prodotti</span>
                    </h2>
                </div>
                
                  <div className="event__bg home">
                  { products.length > 0 ? products.slice(startIndex, endIndex).map((eachProduct, index) =>  (       
                        <div className="product-display-grid" key={index}>
                            <div key={index} className="product-display" role="presentation">
                              <div className="product-display-img">
                                <img alt={eachProduct.nom} className="product-card-img is-img-loaded" src={eachProduct.imgProd} />
                              </div>
                              <div className="product-display-details">
                                  <Link className="titleDetail" to={/* token === null ? "/login" : */ `/detail/${eachProduct.id}`}>{eachProduct.nom}</Link>
                            
                                <div className="pub__image-icon">
                                  <div className="cartInfo">
                                    <p className="text-subtle text-italic">€{parseFloat(eachProduct.prix)}</p>  
                                    <button className="add-card" onClick={() => addToCart(eachProduct)}><BsCart /></button>
                                  </div>  
                                </div>
                              </div>
                            </div>
                          
                        </div>
                      ) )
                     : 
                       <ZeroProduct />
                      }
                      </div>
                
                <div className="btn-box">
                    <Link to='/shop'>
                        View All products
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default Product