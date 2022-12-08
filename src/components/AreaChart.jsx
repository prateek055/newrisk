import React from 'react'
import { Chart  } from "react-chartjs-2";

const AreaChart = () => {
    const data = {
        labels: ["Rohit", "Prateek", "Anubhav","Saarvika"],
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
        cutout: "60%",
        responsive: false,
        legend:{
          labels:{
            fontsize: 2,
  
          },
        },
      },
    };
  
  return (
    <div className="card">
          <Chart
            className="canva"
            radius="5px"
            type="doughnut"
            data={data}
            
            options={data.options}
            style={{top:"1px", left:"-80px"}}
          />
        </div>
  )
}

export default AreaChart


