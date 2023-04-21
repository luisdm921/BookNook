import React from "react";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { data, buyProducts } = useContext(dataContext);


  return data.map((product) => {
    return (
      <div className="card" data-aos="zoom-in" key={product.id}>
        <img src={product.img} alt="img-product-card" />
        <div className="info">
          <p>{product.name}</p>
          <p>${product.price}</p>
          <button onClick={() => buyProducts(product)} className="btn">
            Buy
          </button>
        </div>
      </div>
    );
  });
};

export default Products;
