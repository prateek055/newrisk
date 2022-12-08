import React from "react";
import { Card } from "primereact/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart } from "react-chartjs-2";
import menu from "../../src/icon-Menu.svg"



ChartJS.register(ArcElement, Tooltip, Legend);


  

const RiskProfile = () => {

  const data = {
    //  labels: ["Rohit", "Prateek", "Anubhav","Saarvika"],
    datasets: [
      {
        label: "RISK",
        data: [50, 50, 100],
        backgroundColor: [
          "rgb(217, 128, 38)",
          "rgb(217, 128, 38)",
          "rgb(240,240, 240)",],
        hoverOffset: 4,
        circumference: 180,
        rotation:270,

      },
    ],
    options: {
      cutout: "87%",
      responsive: false,
    
    },
  };

 

  const plugins = [
    {
      id: "here comes your id for the specific plugin",
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 100).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "50% ",
          textX = Math.round((width - ctx.measureText(text).width) / 1.9),
          textY = height / 1.4;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  return (
    <div>
      
     
      <Card
        title="Risk Profile"
        
        
        style={{ width: "31rem", marginBottom: "2rem", height: "16rem" ,textAlign:"left", display:"flex"}}
      >
        
       <div className="half__chart"  >
         <div style={{textAlign  :"center",position:"relative" ,bottom:"-120px" ,left:"5px" }}>
        
            Medium
          </div>
          
          <Chart
          
            className="canva"
            radius="5px"
            type="doughnut"
            data={data}
            options={data.options}
            plugins={plugins}
            
            style={{ position: "relative", width: "80%" , top:"-30px",right:"-40px"}}
          />
          <div style={{position:"relative", textAlign:"right", left:"75px",bottom:"226px"}}>
            <img src={menu}/>
          </div>
          
          
    
          
          
          
        </div>
        
      </Card>
    </div>
  );
};

export default RiskProfile;
