import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#800000] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#6a0000] transition-colors cursor-pointer !rounded-button whitespace-nowrap"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Layout;
