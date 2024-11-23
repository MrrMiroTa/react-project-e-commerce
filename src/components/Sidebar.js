import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <div
      className={`sidebar bg-white shadow position-fixed top-0 ${
        isOpen ? "end-0" : "end-100"
      } transition-all`}
      style={{
        height: "100vh",
        width: "100%",
        maxWidth: "30vw",
        zIndex: 1050,
        transition: "right 0.3s ease-in-out",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom py-3 px-4">
        <h6 className="text-uppercase fw-bold mb-0">Shopping Bag ({itemAmount})</h6>
        <button
          className="btn p-0 d-flex align-items-center justify-content-center"
          onClick={handleClose}
        >
          <IoMdArrowForward size={24} />
        </button>
      </div>

      {/* Cart Items */}
      <div
        className="overflow-auto px-4 border-bottom"
        style={{ height: "50vh" }}
      >
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <p className="text-center mt-4">Your cart is empty.</p>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3">
        {/* Subtotal & Clear Cart */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="fw-bold">
            <span className="me-2">Subtotal:</span>${total.toFixed(2)}
          </div>
          <button
            className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center"
            onClick={clearCart}
            style={{ width: "48px", height: "48px" }}
          >
            <FiTrash2 size={20} className="text-white" />
          </button>
        </div>

        {/* Buttons */}
        <Link
          to="/"
          className="btn btn-outline-primary w-100 mb-2 text-uppercase fw-semibold"
        >
          View Cart
        </Link>
        <Link
          to="/checkout"
          className="btn btn-primary w-100 text-uppercase fw-semibold text-white"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
