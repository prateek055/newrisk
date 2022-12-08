import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";


const Input = () => {
  const [value, setValue] = useState("");

  return (
    <div
      className="input__bar__risks"
      style={{ height: "40px", marginRight: "25px" }}
    >
      <div className="search__bar">
        <InputText
          style={{ width: "300px", height: "40px" }}
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          label="Search"
          className="p-button-rounded"
          style={{left:"-20px", width:"120px"}}
        />
      </div>
    </div>
  );
};

export default Input;
