import React, { Fragment } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { DLT, REMOVE } from "./Redux/Cartaction";
import { useState } from "react";
import { useEffect } from "react";
import { ADD } from "./Redux/Cartaction";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const [allValue, setAllValue] = useState(0);
  const [price, setPrice] = useState(0);
  console.log(price);
  const myState = useSelector((state) => {
    console.log(state);
    return state.ChangeTheNumber.counter;
  });
  if (myState == 100) {
    navigate("/");
  }
  const dispatch = useDispatch();
  const newdata = useSelector((state) => state.cartreducer.carts);
  // console.log("hii");
  console.log(newdata);
  const dlt = (id) => {
    dispatch(DLT(id));
  };
  // increment
  const send = (d) => {
    console.log(d);
    dispatch(ADD(d));
  };

  const total = () => {
    let price = 0;
    newdata.map((ele, k) => {
      price = ele.price + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    total();
  }, [total]);

  // emove pne
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  return (
    <div>
      <div className="navbarlowlabel">
        <p>
          Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer
          <span>Shop Now</span>
        </p>
      </div>
      {/* TESTIMONIAL */}
      <div className="testimonialbabysection">
        <h2>Cart</h2>
        <span>Home | Cart </span>
      </div>
      <div className="carttitle">
        <div className="product">
          <div className="PRODUCT_TITLE">
            <div> PRODUCT TITLE</div>
            <div>
              {newdata.map((data) => {
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexdirection: "column",
                        padding: 10,
                      }}
                    >
                      {data.title}
                      <div
                        style={{
                          display: "flex",
                          flexdirection: "row",
                          padding: 10,
                        }}
                      ></div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="PRICE">
            <div>PRICE</div>
            <div>
              {newdata.map((data) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexdirection: "row",
                      padding: 10,
                    }}
                  >
                    $ {data.price * data.quantity}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="QUANTITY">
            <div>QUANTITY</div>
            <div>
              {newdata.map((data) => {
                return (
                  <>
                    <div className="quantity">
                      <a onClick={() => send(data)}>
                        <span>+</span>
                      </a>
                      <input type="text" value={data.quantity} />
                      <a>
                        <span
                          onClick={
                            data.quantity <= 1
                              ? () => dlt(data.id)
                              : () => remove(data)
                          }
                        >
                          -
                        </span>
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="TOTAL">
            <div>TOTAL</div>
            <div style={{ padding: 10 }}>
              {newdata.map((data) => {
                let a = data.price * data.quantity;
                return <div style={{ padding: 6 }}> $ {a}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="updatecart">
        <button>update cart</button>
        <button>close coupon</button>
      </div>
      <div className="subtotal">
        <div>Subtotal</div>
        <div className="subtotalmoney">
          :$
          {newdata.reduce((acc, product) => {
            acc += product.price * product.quantity;
            return acc;
          }, 0)}
        </div>
      </div>
      <div className="shipping">
        <div>Shipping</div>
        <div className="shippinglist">
          <li>
            Flat rae:%50.00
            <input type="radio" />
          </li>
          <li>
            Flat rae:%50.00
            <input type="radio" />
          </li>
          <li>
            Flat rae:%50.00
            <input type="radio" />
          </li>
          <li>
            Flat rae:%50.00
            <input type="radio" />
          </li>
        </div>
      </div>
      <div className="labelcart">
        <select>
          <option> Bangladesh</option>
          <option>Login</option>
          <option>Cart</option>
          <option>Product-Details</option>
          <option>Product Checkout</option>
        </select>
      </div>
      <div className="labelcart">
        <select>
          <option> select a state</option>
          <option>Login</option>
          <option>Cart</option>
          <option>Product-Details</option>
          <option>Product Checkout</option>
        </select>
      </div>
      <div className="labelcart">
        <input type="text" placeholder="Postcode/Zipcode" />
        <button>update details</button>
      </div>
      <div className="lastbutton">
        <button>continue shopping</button>
        <button>proceed to checkout</button>
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

export default Cart;
