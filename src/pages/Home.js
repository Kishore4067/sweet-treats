import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import R1 from './Router-Images/R1.jpg';
import R2 from './Router-Images/R2.jpeg';
import R3 from './Router-Images/R3.jpg';
import R5 from './Router-Images/R5.jpg';
import b1 from './Router-Images/B1.jpeg';
import b2 from './Router-Images/B2.jpeg';
import b3 from './Router-Images/B3.jpeg';
import b4 from './Router-Images/B4.jpeg';
import b5 from './Router-Images/B5.jpeg';
import b6 from './Router-Images/B6.jpeg';
import b7 from './Router-Images/B7.jpeg';
import b8 from './Router-Images/B8.jpg';
import b9 from './Router-Images/B9.jpeg';
import b10 from './Router-Images/B10.jpg';
import b11 from './Router-Images/B11.jpg';
import b12 from './Router-Images/B12.jpg';

const Home = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const carouselImages = [R1, R2, R3, R5];

  const products = [
    { id: 1, img: b1, name: "Ferroro Rocher", price: 450 },
    { id: 2, img: b2, name: "Kinder Choco Bons", price: 420 },
    { id: 3, img: b3, name: "Nutella", price: 300 },
    { id: 4, img: b4, name: "Kinder Bueno White", price: 250 },
    { id: 5, img: b5, name: "Kinder Bueno Choc", price: 350 },
    { id: 6, img: b6, name: "Kinder Cards", price: 500 },
    { id: 7, img: b7, name: "Kinder Joy", price: 480 },
    { id: 8, img: b8, name: "Snickers", price: 520 },
    { id: 9, img: b9, name: "Bounty", price: 180 },
    { id: 10, img: b10, name: "Mars", price: 320 },
    { id: 11, img: b11, name: "Galaxy caramel", price: 200 },
    { id: 12, img: b12, name: "Dairy Milk Silk", price: 430 }
  ];

  const [addedButtonId, setAddedButtonId] = useState(null);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setAddedButtonId(product.id);
    setTimeout(() => setAddedButtonId(null), 1000);
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 } 
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handlePayment = () => {
    navigate("/NoPage");
  };

  const handleCancel = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Get quantity of product in cart
  const getQuantity = (id) => {
    const product = cartItems.find(item => item.id === id);
    return product ? product.quantity : 0;
  };

  return (
    <div className="container-fluid">

      {/* Carousel */}
      <div id="homeCarousel" className="carousel slide mb-5" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          {carouselImages.map((img, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img src={img} className="d-block w-100" alt="slide" style={{ height: "500px", objectFit: "cover" }} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Running Offer Text */}
      <div style={{
        width: "100%",
        backgroundColor: "#363232",
        color: "white",
        fontWeight: "600",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "10px 0",
        marginBottom: "20px",
        borderRadius: "8px"
      }}>
        <div style={{
          display: "inline-block",
          paddingLeft: "100%",
          animation: "scroll-left 15s linear infinite"
        }}>
          🎉 50% OFF on your first order! Grab your favorite chocolates now! 🍫
        </div>

        <style>
          {`
            @keyframes scroll-left {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
            .card:hover {
              transform: scale(1.05);
              box-shadow: 0px 10px 25px rgba(0,0,0,0.3);
              transition: all 0.3s ease-in-out;
            }
          `}
        </style>
      </div>

      {/* Products Section */}
      <div className="text-center mb-4">
        <h3 style={{ fontWeight: "700", color: "#343a40" }}>🍫 Our Products</h3>
        <p className="text-muted">Choose your favorite chocolates and treats</p>
      </div>

      {/* Products */}
      <div className="row text-center">
        {products.map(item => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100 position-relative" style={{ borderRadius: "12px" }}>
              
              {/* Quantity Badge */}
              {getQuantity(item.id) > 0 && (
                <span
                  className="badge bg-danger position-absolute"
                  style={{ top: "10px", right: "10px", fontSize: "0.9rem" }}
                >
                  {getQuantity(item.id)}
                </span>
              )}

              <img src={item.img} className="card-img-top" alt={item.name} style={{ height: "260px", objectFit: "cover" }} />
              <div className="card-body d-flex flex-column align-items-center">
                <h5>{item.name}</h5>
                <p className="text-success fw-bold">₹{item.price}</p>

                {/* Add / Decrease Buttons */}
                {getQuantity(item.id) > 0 ? (
                  <div className="d-flex gap-2">
                    <button className="btn btn-danger" onClick={() => decreaseQty(item.id)}>−</button>
                    <button className="btn btn-dark" onClick={() => addToCart(item)}>+</button>
                  </div>
                ) : (
                  <button
                    className="btn btn-dark w-50"
                    style={{ backgroundColor: addedButtonId === item.id ? "#28a745" : "#343a40" }}
                    onClick={() => addToCart(item)}
                  >
                    {addedButtonId === item.id ? "Added ✅" : "Add to Cart"}
                  </button>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout & Cancel Buttons */}
      {cartItems.length > 0 && (
        <div className="fixed-bottom mb-3 d-flex justify-content-center gap-2">
          <button className="btn btn-primary btn-lg px-4" onClick={handlePayment}>
            Go to Payment (₹{totalPrice})
          </button>
          <button className="btn btn-outline-danger btn-lg px-4" onClick={handleCancel}>
            Cancel Payment
          </button>
        </div>
      )}

    </div>
  );
};

export default Home;