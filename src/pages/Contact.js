import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Contact.css";
import bgImage from './Router-Images/c1.jpg';

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faHeadset, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    padding: "70px 0",
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Message sent successfully! ✅"); // Show alert
    setFormData({ name: "", email: "", message: "" }); // Clear inputs
  };

  return (
    <div style={bgStyle} className="contact-bg">
      <div className="container">
        <h1 className="contact-title">💬 Contact & Support</h1>
        <div className="row">

          {/* Support Info */}
          <div className="col-lg-5 mb-4">
            <div className="support-card">
              <h3 className="support-title">
                <FontAwesomeIcon icon={faHeadset} /> Customer Support
              </h3>
              <div className="support-item">
                <FontAwesomeIcon icon={faEnvelope} className="icon email" />
                support@sweettreats.com
              </div>
              <div className="support-item">
                <FontAwesomeIcon icon={faPhone} className="icon phone" />
                +91 98765 43210
              </div>
              <div className="support-item">
                <FontAwesomeIcon icon={faLocationDot} className="icon location" />
                SweetTreats Bakery, Chennai, India
              </div>
              <p className="support-time">⏰ Mon – Sat : 9:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="form-card">
              <h3 className="form-title">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control stylish-input"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control stylish-input"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="form-control stylish-input"
                    placeholder="Your Message..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="send-btn">
                  Send Message <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;