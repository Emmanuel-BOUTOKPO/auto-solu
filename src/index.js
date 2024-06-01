import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import { ProductProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div id="wrapper">   
       <CartProvider>
         <AuthProvider>
           <ProductProvider >  
             <App />
           </ProductProvider>
         </AuthProvider>
       </CartProvider>
     </div> 
  </React.StrictMode>
);
