import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-brand">AURO</p>
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
      <small className="footer-copy">© {new Date().getFullYear()} AURO. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
