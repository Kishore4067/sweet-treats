import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NoPage = ({ cartItems, setCartItems }) => {

  const increaseQty = (id) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handlePayment = () => {
    alert("Payment successful! ✅"); // Show success alert
    setCartItems([]); // Clear cart after payment
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🛒 Your Cart Items</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">No items in your cart.</p>
      ) : (
        <div className="row justify-content-center">
          {cartItems.map(item => (
            <div className="col-md-6 mb-3" key={item.id}>
              <div className="card p-2 d-flex flex-row align-items-center shadow-sm position-relative">
                <img src={item.img} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "5px" }} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{ fontWeight: "bold", border: "2px solid white" }}>
                  {item.quantity}
                </span>
                <div className="ms-3 flex-grow-1">
                  <h6 className="mb-1">{item.name}</h6>
                  <p className="mb-0 text-success fw-bold">
                    ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                  </p>
                </div>
                <div className="d-flex flex-column gap-1">
                  <button className="btn btn-sm btn-danger" onClick={() => decreaseQty(item.id)}>-</button>
                  <button className="btn btn-sm btn-success" onClick={() => increaseQty(item.id)}>+</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12 mt-4">
            <div className="card p-3 shadow-lg" style={{ borderRadius: "15px", background: "linear-gradient(135deg, #fff7e6, #ffe0b3)" }}>
              <h5 className="mb-2 text-center fw-bold" style={{ color: "#b34700" }}>Cart Summary</h5>
              <p className="text-center mb-1">Total Items: <span className="fw-bold">{totalItems}</span></p>
              <p className="text-center mb-2">Total Price: <span className="fw-bold text-success">₹{totalPrice}</span></p>
              <button className="btn btn-primary btn-lg w-100" onClick={handlePayment}>
                Pay ₹{totalPrice} ✅
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoPage;