import React from "react";
import { Link } from "react-router-dom";
import "./products.css";

const currency = (n) =>
  typeof n === "number" ? n.toLocaleString("da-DK", { style: "currency", currency: "DKK" }) : n;

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <Link to={`/products/${product.productId}`} className="product-link">
        {product.imageUrl ? (
          <img className="product-image" src={product.imageUrl} alt={product.name} />
        ) : (
          <div className="product-image placeholder" aria-label="No image" />
        )}
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <div className="product-meta">
            <span className="product-price">{currency(product.price)}</span>
            {product.categoryName && <span className="product-category">{product.categoryName}</span>}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
