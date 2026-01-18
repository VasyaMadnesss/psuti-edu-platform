import Header from "../header/header";
import { Outlet } from "react-router";
import { Footer } from "../footer/footer";

import "./layout.css";

export const Layout = () => {
  return (
    <>
      <div className="geometric-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="layout">
        <Header />
        <main className="layout__main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
