import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitem, setcartitems] = useState({});

  const addCart = (id) => {
    if (!cartitem[id]) {
      setcartitems((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setcartitems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeCart = (id) => {
    setcartitems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  useEffect(() => {
    console.log(cartitem);
  }),
    [cartitem];

  const gettotal = () => {
    let total = 0;
    for (let item in cartitem) {
      if (cartitem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        total += iteminfo.price * cartitem[item];
      }
    }
    return total;
  };

  const ContextValue = {
    food_list,
    cartitem,
    setcartitems,
    addCart,
    removeCart,
    gettotal,
  };

  return (
    <storeContext.Provider value={ContextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
