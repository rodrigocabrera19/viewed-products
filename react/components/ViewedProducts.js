import React, { useEffect, useState } from "react";

const ViewedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productsJson = JSON.parse(localStorage.getItem("viewedProduct"));
    if (productsJson && productsJson.length > 0) {
      setProducts(productsJson);
    }
  }, []);
  return (
    <div>
      <h1>Productos vistos</h1>
      {products &&
        products.length > 0 &&
        products.map((product, index) => {
          return (
            <div key={index}>
              <h2>{product.productName}</h2>
              <h2>{product.brand}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default ViewedProducts;
