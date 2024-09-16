import { useEffect, useState } from "react";
import Logo from "../../assets/icons/logo.png";
import LogoWhite from "../../assets/icons/logo-white.png";
import NavIcon from "../../assets/icons/nav-icon.png";
import NavIconWhite from "../../assets/icons/nav-icon-white.png";
import "./header.css";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [activeTab, setActiveTab] = useState("/home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      setActiveTab(location.pathname);
    }
  }, [location]);

  return (
    <div className="w-100">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/#/home">
          <img
            src={activeTab === "/contact" ? LogoWhite : Logo}
            width=""
            height="40"
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage: `url(${
                activeTab == "/contact" ? NavIconWhite : NavIcon
              })`,
            }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className={`nav-item ${activeTab == "/home" && "active"}`}>
              <a className="nav-link one-line" href="/#/home">
                Home
              </a>
            </li>
            {/* <li className={`nav-item ${activeTab == "/services" && "active"}`}>
              <a className="nav-link one-line" href="/#/services">
                Services
              </a>
            </li>
            <li className={`nav-item ${activeTab == "/products" && "active"}`}>
              <a className="nav-link one-line" href="/#/products">
                Products
              </a>
            </li> */}
            <li className={`nav-item ${activeTab == "/about" && "active"}`}>
              <a className="nav-link one-line" href="/#/about">
                About Us
              </a>
            </li>
            {/* <li className={`nav-item ${activeTab == "/careers" && "active"}`}>
              <a className="nav-link one-line" href="/#/careers">
                Careers
              </a>
            </li> */}
            {/* <li
              className={`nav-item ${activeTab == "/developers" && "active"}`}
            >
              <a className="nav-link one-line" href="/#/developers">
                Developers
              </a>
            </li> */}
            <li className={`nav-item ${activeTab == "/contact" && "active"}`}>
              <a className="nav-link one-line" href="/#/contact">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
