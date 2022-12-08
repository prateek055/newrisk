import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import RiskTrends from "./components/RiskTrends";
import Main from "./components/Main";



const App = () => {
  return (
  <>
    <div className="App">
      <Navbar />
      <Chart />
      <RiskTrends/>
      <Main/>
      
    </div>
   
     
    
    

    
    </>
  );
};

export default App;