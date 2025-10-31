import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { useCategories } from "../../lib/api";

const Navigation = () => {
  const { data: categories } = useCategories();

  return (
    <>
      <div className="topbar">
  <div className="topbarLeft">AURO</div>
      </div>
      <div className="divider" />
      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}>
          Products
        </NavLink>
        {categories?.map((category) => (
          <Link key={category.categoryId} to={`/products?categoryId=${category.categoryId}`} className="nav-link">
            {category.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
