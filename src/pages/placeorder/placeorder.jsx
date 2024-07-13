import React, { useContext } from "react";
import "./placeorder.css";
import { storeContext } from "../../context/storeContext";

const placeorder = () => {
  const { gettotal } = useContext(storeContext);
  return (
    <form className="place-order">
      <div className="delivery">
        <h2>Delivery Information</h2>
        <div className="delivery-address">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Phone Number" />
        </div>
      </div>
      <div className="carttotal">
        <h2>Cart Totals</h2>
        <div className="leftdata">
          <div className="subtotals">
            <p>Subtotal</p>
            <p>${gettotal()}</p>
          </div>
          <hr />
          <div className="subtotals">
            <p>Delivery Fee</p>
            <p>${gettotal()===0?0:2}</p>
          </div>
          <hr />
          <div className="subtotals total">
            <b>Total</b>
            <b>${gettotal()===0?0:gettotal() + 2}</b>
          </div>
          <button>PROCEED TO PAY</button>
        </div>
      </div>
    </form>
  );
};

export default placeorder;
