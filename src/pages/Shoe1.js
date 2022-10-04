import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage.js";
import TxList from "./TxList.js";
import logo from './assets/SHOES1.png';
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

export default function Item22() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "0.021",
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
          <h1> COTTON CLASSIC SNEAKERS <br />
             </h1>
          <h4> Cotton Classic Sneakers are our take on the <br/>
          evergreen design. We've kept the good parts of this <br/>
          silhouette and tailored it according to the needs of <br/>
          modern times, making it more lightweight and comfortable.</h4>
<br/>
          
<div id="price">
            <h2>
            Price : 0.001 ETH
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
