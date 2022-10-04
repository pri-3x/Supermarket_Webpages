import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage.js";
import TxList from "./TxList.js";
import logo from './assets/tube cream png.png';
import './item.css';
import Navbar from "../components/Navbar.js";

import Footer1 from "../components/Footer1.js";


const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function Item16() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "0.069",
      addr: "0x0fA03204c999cAfA21dE7a5EB61117C8d6cFf530"
    });
  };

  return (

    <><form className="m-4" onSubmit={handleSubmit}>
      {/* <div className="main "> */}
      <Navbar />
      <div className="div">
        <div className=" image">
          <img className="image2" src={logo} alt="Item"></img>
        </div>



        <div id="content" className="child">
          <h1> LOTUS FACE CREAM <br />
            ROUND NECK TSHIRT </h1>
          <h4>The gel-based formula provides long term<br />
           hydration and protection from the sun.<br />
            Aloe Vera makes it non-sticky & <br />
            lightweight.While Raspberry in the sunscreen<br />
             protects against the sun and its harmful rays.</h4>

             <div id="price">
            <h2>
            Price : 0.069 ETH
            </h2>
            </div>
          <br /> <br /> <br /><br /> 



<div className="row1">
          <select className="bt-1">
          <option>Quantity</option>
            <option> 1</option>
            <option>2</option>
            <option> 3</option>
            <option> 4</option>
            <option> 5</option>
          </select>



          <button
            type="submit"
            id="btn"
            className="bt-1"
          >
            Buy Now
          </button>
          </div>
          <br /> <br /><br /> <br />
        </div>


      </div>

      
    </form><Footer1 /></>
    
  );
}

