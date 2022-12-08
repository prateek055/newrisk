import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "./DropDown.css";

const DropDown = () => {
  const [selectedCity1, setSelectedCity1] = useState(null);
  const [selectedCity2, setSelectedCity2] = useState(null);
  const [selectedCity3, setSelectedCity3] = useState(null);

  const cities1 = [
    { name: "New York" },
    { name: "Rome" },
    { name: "London" },
    { name: "Istanbul" },
    { name: "Paris" },
  ];

  const onCityChange1 = (e) => {
    setSelectedCity1(e.value);
  };

  const cities2 = [
    { name: "New York" },
    { name: "Rome" },
    { name: "London" },
    { name: "Istanbul" },
    { name: "Paris" },
  ];

  const onCityChange2 = (e) => {
    setSelectedCity2(e.value);
  };

  const cities3 = [
    { name: "New York" },
    { name: "Rome" },
    { name: "London" },
    { name: "Istanbul" },
    { name: "Paris" },
  ];

  const onCityChange3 = (e) => {
    setSelectedCity3(e.value);
  };

  return (
    <div className="filters">
      <div className="filter__individual">
        <Dropdown
          style={{
            width: "132px",
            borderRadius: "10px",
          }}
          value={selectedCity1}
          options={cities1}
          onChange={onCityChange1}
          optionLabel="name"
          placeholder="Threat "
        />
      </div>
      <div className="filter__individual">
        <Dropdown
          style={{
            width: "132px",
            borderRadius: "10px",
          }}
          value={selectedCity2}
          options={cities2}
          onChange={onCityChange2}
          optionLabel="name"
          placeholder="Action "
        />
      </div>
      <div className="filter__individual">
        <Dropdown
          style={{
            width: "132px",
            borderRadius: "10px",
          }}
          value={selectedCity3}
          options={cities3}
          onChange={onCityChange3}
          optionLabel="name"
          placeholder="Assignee"
        />
      </div>
    </div>
  );
};

export default DropDown;
