import React from "react";

import { Card } from "primereact/card";
// import AreaChart from "./AreaChart";
import menu from "../../src/icon-Menu.svg"
const RiskTrends = () => {
  return (
    <div style={{padding:"5px"}}>
      <Card
        title="Risk Trends"
        style={{
          width: "93rem",
          height: "20rem",
          margin: "9px",
          textAlign: "left",
          
        }}
      >
        {/* <AreaChart /> */}
        <div style={{position:"relative", textAlign:"right", left:"0px",bottom:"54px"}}>
            <img src={menu}/>
          </div>
      </Card>
    </div>
  );
};

export default RiskTrends;
