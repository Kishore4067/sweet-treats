import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer
      className="text-light pt-5"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning fw-bold mb-3">Contact Us</h5>
            <p className="mb-2">
              <i className="fa-solid fa-phone me-2"></i>
              +91 9080549385
            </p>
            <p>
              <i className="fa-solid fa-envelope me-2"></i>
              kk123@gmail.com
            </p>
          </div>

          {/* Legal */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning fw-bold mb-3">Legal & Privacy</h5>
            <ul className="list-unstyled footer-links">
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
              <li>Trade In Policy</li>
              <li>Shipping Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning fw-bold mb-3">Need Help</h5>
            <ul className="list-unstyled footer-links">
              <li>FAQs</li>
              <li>My Account</li>
              <li>My Orders</li>
              <li>Meet the Team</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning fw-bold mb-3">Follow Us</h5>
            <p><i className="fa-brands fa-x-twitter me-2"></i>Twitter</p>
            <p><i className="fa-brands fa-facebook me-2"></i>Facebook</p>
            <p><i className="fa-brands fa-instagram me-2"></i>Instagram</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-3 small">
          © 2026 <span className="text-warning">SweetTreats</span> | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
