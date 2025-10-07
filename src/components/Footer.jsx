import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">MenStyle</h5>
            <p>
              Your one-stop shop for premium men's fashion, footwear, and accessories.
              Trusted by thousands of customers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/mens-collection" className="text-light text-decoration-none">Shop</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Categories</h6>
            <ul className="list-unstyled">
              <li><a href="https://www.nykaafashion.com/?srsltid=AfmBOooLg21oFPwTM2Do8vJw0HQ9hz_ycd01ke7J3y1YAcdrPdtOSZEh" className="text-light text-decoration-none">Fashion</a></li>
              <li><a href="https://www.trends-footwear.com/" className="text-light text-decoration-none">Footwear</a></li>
              <li><a href="https://www.myntra.com/accessories" className="text-light text-decoration-none">Accessories</a></li>
              <li><a href="/category/seasonal" className="text-light text-decoration-none">Seasonal</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5"><FaFacebookF /></a>
              <a href="#" className="text-light fs-5"><FaInstagram /></a>
              <a href="#" className="text-light fs-5"><FaTwitter /></a>
              <a href="#" className="text-light fs-5"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        {/* Bottom Copyright */}
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} MenStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
