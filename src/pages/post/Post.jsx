import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductContext';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Post = () => {
    const { addProduct, updateProduct } = useContext(ProductContext);
    const {id} = useParams()
    const state = useLocation().state;
    const [product, setProduct] = useState({
      nom: '',
      categorie: '',
      model: '',
      ficheTech: '',
      imgProd: '',
      imgsProd: [],
      prix: 0,
      stock: 0,
      description: ''
    });
  
    useEffect (() => {
      if (state) {
        setProduct(state);
      }
    }, [state]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
    };
  
    const handleImageChange = (e) => {
      const { name, files } = e.target;
      if (files.length > 0) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProduct({ ...product, [name]: reader.result });
        };
        reader.readAsDataURL(files[0]);
      }
    };
  
    const handleMultipleImagesChange = (e) => {
      const { files } = e.target;
      const imgsArray = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          imgsArray.push(reader.result);
          if (imgsArray.length === files.length) {
            setProduct({ ...product, imgsProd: imgsArray });
          }
        };
        reader.readAsDataURL(file);
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (state) {
        updateProduct(product.id, product);
      } else {
        addProduct(product);
      }
      setProduct({
        nom: '',
        categorie: '',
        model: '',
        ficheTech: '',
        imgProd: '',
        imgsProd: [],
        prix: 0,
        stock: 0,
        description: ''
      });
    };
  
    return (
        <>
        <Navbar />
        <div className="container">
     
      <form onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom" value={product.nom} onChange={handleChange} />
        <input type="text" name="categorie" placeholder="Catégorie" value={product.categorie} onChange={handleChange} />
        <input type="text" name="model" placeholder="Modèle" value={product.model} onChange={handleChange} />
        <input type="text" name="ficheTech" placeholder="Fiche Technique" value={product.ficheTech} onChange={handleChange} />
        <input type="file" name="imgProd" onChange={handleImageChange} />
        {product.imgProd && <img src={product.imgProd} alt="Image principale" style={{ width: '100px' }} />}
        <input type="file" name="imgsProd" multiple onChange={handleMultipleImagesChange} />
        {product.imgsProd.length > 0 && product.imgsProd.map((img, index) => (
          <img key={index} src={img} alt={`Supplémentaire ${index}`} style={{ width: '100px' }} />
        ))}
        <input type="number" step="0.01" name="prix" placeholder="Prix" value={product.prix} onChange={handleChange} />
        <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange}></textarea>
        <button type="submit">{id ? 'Modifier' : 'Ajouter'} le produit</button>
      </form>

        </div>
        <Footer />
        </>
    );
  };

export default Post
