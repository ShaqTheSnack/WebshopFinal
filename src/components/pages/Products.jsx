import React from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../lib/api";
import ProductCard from "../products/ProductCard";
import "../products/products.css";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = Number(searchParams.get("categoryId") || 0);
  const pageNumber = Number(searchParams.get("pageNumber") || 1);
  const pageSize = 12;
  const { data: products, isLoading, error } = useProducts({ categoryId: categoryId || undefined, pageNumber, pageSize });

  return (
    <section>
      <h2 className="section-title">Products</h2>

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

      <div className="pagination">
        <button
          disabled={pageNumber <= 1}
          onClick={() => {
            const next = new URLSearchParams(searchParams);
            const newPage = Math.max(1, pageNumber - 1);
            if (newPage === 1) next.delete("pageNumber"); else next.set("pageNumber", String(newPage));
            setSearchParams(next);
          }}
        >
          Previous
        </button>
        <span>Page {pageNumber}</span>
        <button
          onClick={() => {
            const next = new URLSearchParams(searchParams);
            const newPage = pageNumber + 1;
            next.set("pageNumber", String(newPage));
            setSearchParams(next);
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Products;