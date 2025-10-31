import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import Cover from "../../components/cover/Cover";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="layout">
      <Navigation />
      <Cover />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
