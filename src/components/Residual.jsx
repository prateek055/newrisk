import React from "react";
import { Card } from "primereact/card";

import { Chart  } from "react-chartjs-2";
import "./Residual.css";
import menu from "../../src/icon-Menu.svg"


const Residual = () => {
  const data = {
      // labels: ["Rohit", "Prateek", "Anubhav","Saarvika"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100,70],
        backgroundColor: [
          "rgb(217, 217, 38)",
          "rgb(128, 38, 217)",
          "rgb(255, 205, 86)",
          "rgb(38, 217, 217)",

        ],
        hoverOffset: 4,
      },
    ],
    options: {
      cutout: "70%",
      responsive: false,
      legend:{
        labels:{
          fontsize: 20,

        },
      },
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
        var text = "44",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const dummyData = [
    {
      id: 1,
      name: "Accidental",
      number: 21,
    },
    {
      id: 2,
      name: "Advertisement",
      number: 12,
    },
    {
      id: 3,
      name: "Sturctural",
      number: 10,
    },
    {
      id: 4,
      name: "Enviromental",
      number: 2,
    },
  ];

  return (
    <div>
      <Card
        title="Residual Risk by Source Type"
        style={{ width: "30rem", marginBottom: "2rem", height: "16rem", textAlign:"left" , }}
      >
        <div className="card">
          <Chart
            className="canva"
            radius="5px"
            type="doughnut"
            data={data}
            plugins={plugins}
            options={data.options}
            style={{top:"-5px", left:"-80px"}}
          />
        </div>
        

        <div style={{position:"relative", textAlign:"right", left:"1px",bottom:"204px"}}>
            <img src={menu}/>
          </div>

          <div className="dummy__data__container">
            {dummyData.map((item) => {
              return (
                <div className="tabs" style={{position:"relative", left:"280px", bottom:"210px"}}>
                  <div>{item.name}</div>
                  <div>{item.number}</div>
                </div>
              );
            })}
          </div>
        
      </Card>
    </div>
  );
};

export default Residual;
