// App.js
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Product from "./component/Product";
import Feature from "./component/Feature";
import States from "./States";
import Footer from "./Footer";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=12"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />

      <Hero />
      <div className="flex- flex-col text-center w-full mt-5">
        <h1 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h1>
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h2>
      </div>

      {products.length > 0 ? (
        <Product products={products} /> // Pass products as props
      ) : (
        <div>Loading....</div>
      )}
      
     
     

      <Feature />
      <States />
      <Footer />
    </>
  );
}

export default App;
