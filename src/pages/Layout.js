import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Navbar.css";
import Footer from "./Footer";

const Layout = ({ cartItems }) => {
  // Total quantity for batch number
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">

          <Link className="navbar-brand logo" to="/">SweetTreats</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto nav-menu">
              <li className="nav-item">
                <Link className="nav-link nav-item-custom" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-custom" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-custom" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item position-relative">
                <Link className="nav-link nav-item-custom" to="/NoPage">
                  <i className="fa-solid fa-cart-shopping"></i>
                  {totalQuantity > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        color: "white",
                        border: "1px solid white",
                      }}
                    >
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;