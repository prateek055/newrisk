import React from "react";
import "./Results.css";

const Results = () => {
  return (
    <div className="filtereed__results" style={{display:"flex", columnGap:"20px",position:"relative",top:"8px"}}>
      <i class="pi pi-refresh"></i>
      <p> 44 results</p>
    </div>
  );
};

export default Results;
