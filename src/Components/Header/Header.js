import React from "react";
import "../Header/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  return (
    <div>
      <div className="container">
        <nav className="row">
          <div className="small-nav col-9">
            <marquee behavior="smooth" direction="left">
              Hotline: 0123456789, Email: employ.youthMartBd.com
            </marquee>
          </div>
          <div className="account col-3 d-flex justify-content-end">
            <a href="/account">Account</a>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row main-menu">
          <div className="col-3">
            <h4>Logo</h4>
          </div>
          <div className="menu-bar col-9 d-flex justify-content-end">
            <a className="menu" href="/home">
              Home
            </a>
            <a className="menu" href="/founders">
              Founders
            </a>
            <a className="menu" href="/investors">
              Investors
            </a>
            <a className="menu" href="/products">
              Products
            </a>
            <a className="menu" href="/shops">
              Shops
            </a>
            <a className="menu" href="/employees">
              Employees
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
