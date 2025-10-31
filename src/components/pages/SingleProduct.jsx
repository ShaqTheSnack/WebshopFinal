import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProduct } from "../../lib/api";
import "../products/products.css";

const currency = (n) =>
  typeof n === "number" ? n.toLocaleString("da-DK", { style: "currency", currency: "DKK" }) : n;

const SingleProduct = () => {
  const { id: productId } = useParams();
  const { data: product, isLoading, error } = useProduct(productId);

  if (isLoading) return <p className="status">Loading product…</p>;
  if (error) return <p className="status error">Error: {error}</p>;
  if (!product) return <p className="status">Product not found.</p>;

  return (
    <section className="single-section">
  <Link to="/products">← Back to products</Link>
      <div className="single-layout">
        {product.imageUrl ? (
          <img className="single-image" src={product.imageUrl} alt={product.name} />
        ) : (
          <div className="single-image placeholder" />
        )}
        <div className="single-info">
          <h2 className="single-title">{product.name}</h2>
          {product.categoryName && <p className="single-category">{product.categoryName}</p>}
          <p className="single-price">{currency(product.price)}</p>
          {product.description && <p className="single-desc">{product.description}</p>}
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;