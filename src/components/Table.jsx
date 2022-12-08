import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Table.css";

const Table = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="main__table">
      <DataTable 
        value={posts}
        responsiveLayout="scroll"
        dataKey="id"
        emptyMessage="No data found"
        className="datatable-responsive"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
        rows={10}
      >
        <div >
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Threat Agent"></Column>
        <Column field="username" header="Action Plan"></Column>
        <Column field="company.catchPhrase" header="Assignee"></Column>
        <Column field="username" header="Inherited Tasks"></Column>
        <Column field="username" header="Redmidiation"></Column>
        <Column field="username" header="Residual Tasks"></Column>
        </div>
      </DataTable>
    </div>
  );
};

export default Table;
