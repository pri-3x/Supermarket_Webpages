import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage.js";
import TxList from "./TxList.js";
import logo from './assets/deodrent png.png';
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

export default function Item14() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "0.001",
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
          <h1> PINK LOTUS IMPORTED DEODRANT </h1>
          <h4>Fresh Natural Deodorant contains ocean extracts <br />
            which-give you a feeling of freshness throughout<br />
            the day. It also gives you protection against<br />
            body odour. This product is skin compatibility<br />
            dermatologically tested and recommended <br />
            for daily use. </h4>

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

