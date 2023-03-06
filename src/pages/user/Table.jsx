import React from "react";

function Table() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyCOntent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "center", justifyContent: "center" }}>
        <h2 style={{ color: "royalblue" }}> SERVICE LIST</h2>
      </div>
      <table style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "10%", borderBottom: "1px solid grey" }}>id</th>
          <th style={{ width: "10%", borderBottom: "1px solid grey" }}>
            Charges
          </th>
          <th style={{ width: "10%", borderBottom: "1px solid grey" }}>
            title
          </th>
          <th style={{ width: "15%", borderBottom: "1px solid grey" }}>
            Tagline
          </th>
          <th style={{ width: "30%", borderBottom: "1px solid grey" }}>
            Short description
          </th>
          <th style={{ borderBottom: "1px solid grey" }}>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>1000</td>
          <td>babysitter</td>
          <td>working for 8 hrs per day</td>
          <td>we care for your comfort</td>
          <td>
            <button>Proceed</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>2000</td>
          <td>carwasher</td>
          <td>working for 12 hrs per day</td>
          <td>we care for your car and the cleaning of your car</td>
          <td>
            <button>Proceed</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
