import React from "react";
import Risks from "./Risks";
import Input from "./Input";
import DropDown from "./DropDown";
import Results from "./Results";
import { Card } from "primereact/card";
import Table from "./Table";

const Main = () => {
  return (
    <>
      <Card style={{ margin: "10px", minHeight: "100vh" }}>
        <div className="main__tabs" style={{ margin: " 15px" }}>
          <Risks />
          <div
            className="main__tabs__filters"
            style={{ display: "flex", columnGap: "20px" }}
          >
            <Input />
            <DropDown />

            <Results />
          </div>
        </div>
        <div>
          <Table/>
        </div>
      </Card>
    </>
  );
};

export default Main;
