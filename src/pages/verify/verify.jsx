import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./verify.css";
import axios from "axios";
import { toast } from "react-toastify";

const verify = () => {
    const navigate=useNavigate();
  const [search, setSearch] = useSearchParams();
  const success = search.get("success");
  const orderid = search.get("orderid");

  const verifyorder = async () => {
    try {
        const response=await axios.post("https://food-delivery-app-backend-7ynn.onrender.com/api/order/verify",{success,orderid});
        if(response.data.success){
            navigate("/")
            
            toast.success(response.data.message)
        }else{
            navigate("/order")
            toast.error("payment failed Try again")
        }

           
    } catch (error) {
        
    }
  }
  useEffect(() => {
async function fetchdata(){
    await verifyorder();
    console.log(response)
  }
    fetchdata();

  },[])

  return <div className="verify"> 
<div className="spinner"></div>
  </div>;
};

export default verify;
