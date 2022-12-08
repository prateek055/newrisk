import React from "react";
import "./Navbar.css";
import Icons from "./Icons"

const Navbar = () => {
  return (
  <>
    <div className="navbar">
      <div className="heading" >Risk Management</div>
         <div >
               <Icons/>
         </div>
      </div>
    <h1>Risks</h1>
    </>
  );
};

export default Navbar;
