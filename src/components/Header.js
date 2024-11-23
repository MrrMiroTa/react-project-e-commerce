import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { bottom } from "@popperjs/core";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import logo from "../image/U.png";
import eng from "../image/flag-uk.png";
import fr from "../image/flag-france.png";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  const toggleNav = () => {
    setIsSidenavOpen(!isSidenavOpen); // Toggles the sidenav
  };
  return (
    <>
      <div className="container">
        <div className="header_section_top">
          <div className="row">
            <div className="col-sm-12">
              <div className="custom_menu">
                <ul>
                  <li>
                    <a href="#">Best Sellers</a>
                  </li>
                  <li>
                    <a href="#">Gift Ideas</a>
                  </li>
                  <li>
                    <a href="#">New Releases</a>
                  </li>
                  <li>
                    <a href="#">Today's Deals</a>
                  </li>
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logo_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="logo">
                <a href="index.html">
                  <img src={logo} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header_section">
        <div className="container">
          <div className="containt_main">
            {/* Navbar */}
            <div className="navbar">
              {/* Toggle Button */}
              <button
                className="toggle-icon"
                onClick={toggleNav}
                style={{ background: "none" }}
              >
                &#9776;
              </button>
              {/* All Category Dropdown */}
            </div>

            {/* Sidenav */}
            <div
              className={`sidenav ${isSidenavOpen ? "sidenav-open" : ""}`}
              style={{
                width: isSidenavOpen ? "250px" : "0",
                height: "100%",
                backgroundColor: "#111",
                overflowX: "hidden",
                position: "fixed",
                top: "0",
                left: "0",
                transition: "0.3s",
                paddingTop: "60px",
              }}
            >
              <a href="#" className="closebtn" onClick={toggleNav}>
                &times;
              </a>
              <a href="Home.html">Home</a>
              <a href="Man.html">Man</a>
              <a href="WoMan.html">WoMan</a>
              <a href="About.html">About</a>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Category
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            <div className="main">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search this blog"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    style={{
                      backgroundColor: "#f26522",
                      borderColor: "#f26522",
                    }}
                  >
                    {" "}
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="header_box">
              <div className="lang_box ">
                <a
                  href="#"
                  title="Language"
                  className="nav-link"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    src={eng}
                    alt="flag"
                    className="mr-2 "
                    title="United Kingdom"
                  />{" "}
                  English{" "}
                  <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu ">
                  <a href="#" className="dropdown-item">
                    <img src={fr} className="mr-2" alt="flag" />
                    French
                  </a>
                </div>
              </div>
              <div className="login_menu">
                <ul className="d-flex align-items-center">
                  {/* Shopping bag icon */}
                  <div
                    id="point"
                    className=" cursor-pointer position-relative"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <BsBag className=" fs-3 " />

                    {/* Badge */}
                    <div
                      className="position-absolute top-0 start-100 translate-middle bg-danger text-white rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "18px",
                        height: "18px",
                        fontSize: "12px",
                      }}
                    >
                      {itemAmount}
                    </div>
                  </div>

                  {/* Account section */}
                  <li className="ml-3">
                    <a href="#" className="d-flex align-items-center">
                      <i className="fa fa-user h3  text-dark" aria-hidden="true"></i>{" "}
                      {/* Increase size with fs-3 */}
                      <span className="padding_10 fw-bold text-dark p-b-2">Account</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
  );
}

export default Header;
