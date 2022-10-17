import React from "react";
import Api from "./Api";
import Apiwomen from "./Apiwomen";
import Addicons from "./Addtocart/Addicons";
function Home() {
  return (
    <div className="conatiner">
      <div className="navbarlowlabel">
        <p>
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
          <span>Shop Now</span>
        </p>
      </div>
      <div className="centerpicture">
        <div className="innertext">
          <span className="fashion">fashion style</span>
          <br />
          <span className="style">Minimal Menz Style</span>
          <p>
            publishing and graphic design, <br />
            Lorem ipsum is a placeholder text
          </p>
          <button className="btn1">Shop Now</button>
        </div>
      </div>
      <div className="pic">
        <div className="pic1  picbox">Men's Fashion</div>
        <div className="pic2  picbox">Women's Fashion </div>
        <div className="pic3  picbox">Baby's Fashion </div>
      </div>
      <div className="trending">
        <h2>Trending This week</h2>
        <div className="catg">
          <li>Men</li>
          <li>Women</li>
          <li>Baby</li>
        </div>
      </div>
      <div className="line">.</div>
      <div className="mensectionhome">
        <h3> Men's clothing</h3>
      </div>
      <Api />
      <div className="womensection">
        <h3>women's clothing</h3>
      </div>
      <Apiwomen />
      <div className="testimonial">
        <h2>Customer Testimonial</h2>
        <p>
          Everybody is different, which is why we offer styles for every body.
          <br />
          Laborum fuga incidunt laboriosam voluptas iure, facilis neque earum.
        </p>
        <div className="petey">
          <span>
            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xfounder-img.png.pagespeed.ic.4PZGL9Sx_O.webp" />
          </span>
          <span className="cruise">
            Petey cruise
            <br /> Designer at club
          </span>
        </div>
      </div>
      <div className="maylike">
        <h1>You May Like</h1>
        <div className="maylikeimg">
          <div className="like1 likeall">
            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest5.jpg.pagespeed.ic.WuUZFTYF8g.webp" />
            Cashmere Tank +Bag <br />
            <div className="cashmereprice">
              <span> $90 </span> <span className="cutprice">$120.00</span>
            </div>
          </div>
          <div className="like2 likeall ">
            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest6.jpg.pagespeed.ic.Gs5H8uF_0V.webp" />
            Cashmere Tank +Bag
            <br />
            <div className="cashmereprice">
              <span> $90 </span> <span className="cutprice">$120.00</span>
            </div>
          </div>
          <div className="like3 likeall">
            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest7.jpg.pagespeed.ic.hx4jI0dHK5.webp" />
            Cashmere Tank +Bag <br />
            <div className="cashmereprice">
              <span> $90 </span> <span className="cutprice">$120.00</span>
            </div>
          </div>
          <div className="like3 likeall">
            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest8.jpg.pagespeed.ic.qoQf2-mhtF.webp" />
            Cashmere Tank +Bag <br />
            <div className="cashmereprice">
              <span> $90 </span> <span className="cutprice">$120.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="latest">
        <h1>Latest News</h1>
        <div className="latestproduct">
          <div className="latestproduct1">
            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xblog1.jpg.pagespeed.ic.s1W931fRN7.webp" />
            Fashion Tips <br />
            <div className="para">
              <h2>What curling irons are the best one</h2>
              <p>
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus..
              </p>
              <span>Read More</span>
            </div>
          </div>
          <div className="latestproduct1">
            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xblog2.jpg.pagespeed.ic.JaQe05m-gL.webp" />
            Fashion Tips <br />
            <div className="para">
              <h2>What curling irons are the best one</h2>
              <p>
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus..
              </p>
              <span>Read More</span>
            </div>
          </div>
          <div className="latestproduct1">
            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xblog3.jpg.pagespeed.ic.hExcbkUXD4.webp" />
            Fashion Tips <br />
            <div className="para">
              <h2>What curling irons are the best one</h2>
              <p>
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus..
              </p>
              <span>Read More</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lowericons">
        <div className="delivery">
          <img src="https://img.icons8.com/ios/50/000000/delivery--v1.png" />
          <h3>Fast and Free Delivery</h3>

          <span>Fast Delivery On all Orders</span>
        </div>
        <div className="delivery">
          <img src="https://img.icons8.com/ios-filled/50/000000/card-security.png" />
          <h3>Secure Payment</h3>
          <span>Fast Delivery On all Orders</span>
        </div>
        <div className="delivery">
          <img src="https://img.icons8.com/ios/50/000000/banknotes.png" />
          <h3>Fast and Free Delivery</h3>
          <span>Fast Delivery On all Orders</span>
        </div>
        <div className="delivery">
          <img src="https://img.icons8.com/ios/50/000000/last-24-hours.png" />
          <h3>Secure Payment</h3>
          <span>Fast Delivery On all Orders</span>
        </div>
      </div>
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

export default Home;
