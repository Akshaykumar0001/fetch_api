import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="capitalshop">
          {/* <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/xlogo2_footer.png.pagespeed.ic.DUxRn4vG1w.webp" /> */}
          <li>
            <span>Capital</span> Shop
          </li>
        </div>
        <div className="navlist">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Mensection">Men</Link>
            </li>
            <li>
              <Link to="/Womensection">Women</Link>
            </li>
            <li>
              <Link to="/Babysection">Baby Collection</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>

            <li>Contact</li>
          </ul>
          <div className="label">
            <label>Pages </label>
            <select>
              <option></option>
              <option>Login</option>
              <option>Cart</option>
              <option>Product-Details</option>
              <option>Product Checkout</option>
            </select>
          </div>
        </div>

        <div className="icon">
          <li>
            <img src="https://img.icons8.com/ios/50/000000/search--v1.png" />
          </li>
          <li>
            <img src="https://img.icons8.com/ios/50/000000/login-rounded.png" />
          </li>
          <li>
            <Link to="/Addtocar">
              <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" />
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}

export default Navbar;
