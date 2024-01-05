import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./App.css";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdSpaceDashboard } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <>
    <div id="details">

    </div>
    <ul id="nb" style={{ left: isOpen ? '0' : '-160px' }}>
      <li style={{ position: 'relative', left: '130px' }}>
        <li>
          {isOpen ? <RxCross2 class="nc" onClick={toggleNavbar} id="nbbtn"/> : <FaPlus class="nc" onClick={toggleNavbar} id="nbbtn"/>}
        </li>
        <h4 style={{position:'relative',top:'100px',left:'-140px',color:'green'}}>General</h4>
      </li>
      <MdSpaceDashboard style={{position:'relative',top:'135px'}}/><li><Link to="/" id="link">Dashboard</Link></li>
      <FaFolder style={{position:'relative',top:'135px'}}/><li><Link to="/Categories" id="link">Categories</Link></li>
      <GrTransaction style={{position:'relative',top:'135px'}}/><li><Link to="/Transactions" id="link">Transactions</Link></li>
      <li>
      <h4 style={{position:'relative',top:'100px',left:'-10px',color:'green'}}>EXTRAS</h4>
      </li>
      <BsFillFileBarGraphFill style={{position:'relative',top:'135px'}} /><li><Link to="/Reports" id="link">Reports</Link></li>
      <IoSettings style={{position:'relative',top:'135px'}}/><li><Link to="/" id="link">Settings</Link></li>
    </ul>
    </>
  );
}

export default Navbar;
