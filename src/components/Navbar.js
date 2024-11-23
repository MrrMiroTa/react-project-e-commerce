import React, { useState } from "react";
// import "./Navbar.css";

function Navbar() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleNav = () => {
    setIsSidenavOpen(!isSidenavOpen); // Toggles the sidenav
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        {/* Toggle Button */}
        <button className="toggle-btn" onClick={toggleNav}>
          &#9776;
        </button>
        {/* All Category Dropdown */}
        <div className="dropdown">
          <button className="dropdown-btn">All Category</button>
        </div>
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
        <a href="index.html">Home</a>
        <a href="fashion.html">Fashion</a>
        <a href="electronic.html">Electronic</a>
        <a href="jewellery.html">Jewellery</a>
      </div>
    </>
  );
}

export default Navbar;
