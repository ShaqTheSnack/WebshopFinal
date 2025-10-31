import React from "react";
import { useProducts } from "../../lib/api";
import ProductCard from "../products/ProductCard";
import "../products/products.css";

const Home = () => {
  const { data: products, isLoading, error } = useProducts({ pageNumber: 1, pageSize: 3 });

  return (
    <section>
      <h2 className="section-title">Featured products</h2>
  {isLoading && <p className="status">Loading products…</p>}
  {error && <p className="status error">Error: {error}</p>}
  {!isLoading && !error && (
        <div className="products-grid">
          
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
          {products.length === 0 && <p className="status">No products found.</p>}
        </div>
      )}
    </section>
  );
};

export default Home;