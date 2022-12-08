import React from "react";
import RiskProfile from "./RiskProfile";
import ActionPlan from "./ActionPlan";
import Residual from "./Residual";
import "./Chart.css";




const Chart = () => {
  return (
  
    <div className="chart__grid">
      <RiskProfile />
      <Residual />
      <ActionPlan />
      </div>
      

  
   
  );
};

export default Chart;
