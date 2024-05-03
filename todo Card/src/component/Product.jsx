import React from "react";
import ProductCard from "./ProductCard";

export const Products = ({ product }) => {
  console.log(product)
  return (
    <>
    <div>
      {product.map((item, index) => (
        <ProductCard key={index} card={item}/>
      ))}
    </div>
    </>
  );
};
