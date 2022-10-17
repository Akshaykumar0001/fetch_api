import React from "react";
import Apiwomensection from "./Apiwomensection";
import Filter from "./Filter";
function Womensection() {
  return (
    <div className="conatiner">
      <div className="navbarlowlabel">
        <p>
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
          <span>Shop Now</span>
        </p>
      </div>
      {/* TESTIMONIAL */}
      <div className="testimonialbabysection">
        <h2>Category</h2>
        <span>Home | Category </span>
      </div>

      <div className="mensection">
        <h3> Women's Section</h3>
      </div>
      <div className="filterdiv">
        <Filter />
        <Apiwomensection />
      </div>
      {/* FOOTER SECTION */}
      <div className="footer">
        <div className="footerupper">
          <div className="textarea">
            <h3>Subscribe Newsletter</h3>
            <span>Subscribe newsletter to get 5% on all products.</span>
          </div>
          <div className="input">
            <input type="text" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
          <div className="icons">
            <div style={{ background: "#FF00FF", color: "white" }}>
              <img src="https://img.icons8.com/ios/50/000000/instagram-new--v3.png" />
            </div>
            <div style={{ background: "skyblue", color: "white" }}>
              <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" />
            </div>
            <div style={{ background: "red", color: "white" }}>
              <img src="https://img.icons8.com/ios/50/000000/youtube-play--v1.png" />
            </div>
          </div>
        </div>
        <div className="line2"></div>

        <div className="middlefooter">
          <div className="iconame">
            <span>Capital</span> Shop
          </div>
          <div className="shopmen">
            <span> shop men</span>
            <br />
            <li>clothing fashion</li>
            <li>winter</li>
            <li>summer</li>
            <li>casual</li>
            <li>Formal</li>
          </div>
          <div className="shopmen">
            <span>shop women</span>
            <br />
            <li>clothing fashion</li>
            <li>winter</li>
            <li>summer</li>
            <li>casual</li>
            <li>Formal</li>
          </div>
          <div className="shopmen">
            <span>Baby Collection</span>
            <br />
            <li>clothing fashion</li>
            <li>winter</li>
            <li>summer</li>
            <li>casual</li>
            <li>Formal</li>
          </div>
          <div className="shopmen">
            <span> Quick links</span>
            <br />
            <li>Track you order</li>
            <li>support</li>
            <li>FAQ</li>
            <li>Carrer</li>
            <li>About</li>
            <li>Contact US</li>
          </div>
        </div>
        <div className="line2"></div>
        <div className="lowerfooter">
          <p>
            Copyright ©2022 All rights reserved | This template is made with by
            <img src="https://img.icons8.com/emoji/48/000000/heart-suit.png" />
            Colorlib
          </p>
        </div>
      </div>
    </div>
  );
}

export default Womensection;
