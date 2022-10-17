import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "./Redux/Cartaction";
function Apiwomensection() {
  const [user, setUser] = useState([]);

  const fetchdata = () => {
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=4")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let w = data;
        setUser(w);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const dispatch = useDispatch();
  const send = (d) => {
    console.log(d);
    dispatch(ADD(d));
  };
  return (
    <div className="clearfix">
      <div className="rowwomen">
        {user.map((data) => {
          return (
            <div className="col-1" key={data.id.value}>
              <div className="cardwomen">
                <div className="cardbody">
                  <div className="avatar">
                    <img src={data.image} />
                  </div>
                  <h5 className="card-title carddetails">{data.title}</h5>
                  <h5 className="price  carddetails"> price:{data.price}</h5>
                  <h2 className="category  carddetails">{data.category} </h2>
                  {/* <p className="card-text  carddetails">{data.description} </p> */}
                  <div className="addicon1">
                    <img
                      src="https://img.icons8.com/ios/50/000000/shopping-cart.png"
                      onClick={() => send(data)}
                    />
                    <img src="https://img.icons8.com/ios/50/000000/like--v1.png" />
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-zoom-in-hand-gestures-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" />{" "}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Apiwomensection;
