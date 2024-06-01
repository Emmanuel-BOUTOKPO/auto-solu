import React, { useContext, useState} from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom'
import "./shop.css"
// import ZeroProduct from '../../components/notFound/ZeroProduct'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { BsCart } from 'react-icons/bs';
import { CgMenu, CgMenuGridO } from "react-icons/cg";
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';

const Shop = () => {
  const { getAllProducts,updateFilterCategory, updateFilterModel, updateFilterPrice } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const products = getAllProducts();
  
  const [currentPage, setCurrentPage] = useState(0);
  const groupsPerPage = 2;
  


  const handleCategoryChange = (e) => {
    updateFilterCategory(e.target.value);
  };

  const handleModelChange = (e) => {
    updateFilterModel(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    updateFilterPrice(name === 'min' ? parseFloat(value) || 0 : undefined, name === 'max' ? parseFloat(value) || Infinity : undefined);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
   <>
   <Navbar />
   <div className="container sidebar_section">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 asideHeader">
            <aside className="filter_sidebar">
              <div className="sidebar_header">
                <h3 className="text-white mb-0 filter">Filtrer</h3>
              </div>
              <div className="sb_widget">
                <div className='priceRange'>
                  <h4 className="input_title">Prix</h4>
                  <label>
          
          <input type="number" name="min" placeholder="Min"  onChange={handlePriceChange} />
          <input type="number" name="max" placeholder="Max"  onChange={handlePriceChange} />
        </label>
                   </div>
              </div>
              <hr className='filterHr' />
              <div className="sidebar-filter mt-50">
                <div className="priceRange">
                  <h4 className="input_title">Catégories</h4>
                  <label>
         
          <select onChange={handleCategoryChange}>
            <option value="">All</option>
            {Array.from(new Set(products.map(product => product.categorie))).map(categorie => (
              <option key={categorie} value={categorie}>{categorie}</option>
            ))}
          </select>
        </label>
                </div>
                <hr className='filterHr' />
                <div className="common-filter">
                  <div className='priceRange'>
                    <h4 className="input_title">Modele</h4>
                    <label>
         
          <select onChange={handleModelChange}>
            <option value="">All</option>
            {Array.from(new Set(products.map(product => product.model))).map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </label>
                     </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7">
            <h3>Prodotti</h3>
                 <div className="headert">
                    <div>Tutti 0 risultati</div>
                    <div className="filtre">
                        <div className="rac">
                        <select onChange={handleModelChange}>
                                <option>Ordina per In ordine alfabetico, A-Z</option>
            <option value="">All</option>
            {Array.from(new Set(products.map(product => product.model))).map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
                        </div>
                        <div className="rac">
                           <CgMenu style={{fontSize : "2rem"}}/>
                           <CgMenuGridO style={{fontSize : "2rem"}}/>
                        </div>
                    </div>
                 </div>
                <div className="event__bg home">
                  <div className="product-display-grid">
                  {products.map((product) => (
                      <div key={product.id} className="product-display" role="presentation">
                        <div className="product-display-img">
                          <img alt={product.nom} className="product-card-img is-img-loaded" src={product.imgProd} />
                        </div>
                        <div className="product-display-details">
                            <Link className="titleDetail" to={/* token === null ? "/login" : */ `/detail/${product.id}`}>{product.nom}</Link>
                         
                          <div className="pub__image-icon">
                            <div className="cartInfo">
                              <p className="text-subtle text-italic">{product.prix} FCFA</p>
                              <button className="add-card" onClick={() => addToCart(product)}><BsCart /></button>
                            </div>  
                          </div>
                        </div>
                      </div>
                    ))} 
                  </div>
                </div>
              </div>
              <ReactPaginate
              previousLinkClassName={"prevPag"}
              nextLinkClassName={"prevPag"}
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              pageCount={Math.ceil(products.length > 0 ? products.length / groupsPerPage : 0)}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
        </div>
      </div>
   <Footer />
  {/* <BackTop /> */}

 
</>

  )
}

export default Shop