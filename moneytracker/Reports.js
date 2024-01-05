import React, { useEffect, useState } from "react";
import axios from "axios";

function Report() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/report");
      console.log("Report Data:", response.data);
      if (response.data && typeof response.data === "object") {
        setReportData([response.data]);
      } else if (Array.isArray(response.data)) {
        setReportData(response.data);
      } else {
        console.error("Invalid report data format");
      }
    } catch (error) {
      console.error("Error fetching report data:", error.message);
    }
  };

  fetchData();
}, []);


  return (
    <div style={{ position: "absolute", left: "241px", border: "1px solid black", height: "100vh", width: "83vw" }}>
      <h2>Report</h2>
      <div id="reportTable">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.category}</td>
                <td>{entry.type}</td>
                <td>{entry.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Report;
