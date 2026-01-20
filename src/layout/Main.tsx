import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CartDrawer from "../components/cart/CartDrawer";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </div>
    </>
  );
};

export default Main;
