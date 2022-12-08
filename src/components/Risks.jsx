import React from "react";
import { Button } from "primereact/button";
import "./Risks.css";



const Risks = () => {

  
  return (
    <div className="risks">
      <div className="risks__header">
        <div>
          <h3>Risks</h3>
        </div>
        <Button label="Add New Risk" className="p-button-rounded" style={{width:"150px"}} />
      </div>
    </div>
  );
};

export default Risks;
