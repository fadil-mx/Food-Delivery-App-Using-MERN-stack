import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitem, setcartitems] = useState({});
   const url="http://localhost:3000"
   const [token,settoken]=useState("")



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

  useEffect(() => {
    if(localStorage.getItem("token")){
      settoken(localStorage.getItem("token"))
    }
  }, []) 

  const ContextValue = {
    food_list,
    cartitem,
    setcartitems,
    addCart,
    removeCart,
    gettotal,
    url,
    token,
    settoken,
  };

  return (
    <storeContext.Provider value={ContextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
