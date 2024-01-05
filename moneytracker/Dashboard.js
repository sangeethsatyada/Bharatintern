import React, { useEffect, useState } from "react";
import "./App.css";
import { FaRupeeSign } from "react-icons/fa";
import { PieChart, Pie, Tooltip } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import axios from "axios";

function Dashboard() {
  const data01 = [
    { name: "Travel", value: 400, fill: "#0088FE" },
    { name: "Health care", value: 300, fill: "#00C49F" },
    { name: "Education", value: 300, fill: "#FFBB28" },
    { name: "Garments", value: 200, fill: "#FF8042" },
    { name: "Grocery", value: 278, fill: "#D8544E" },
    { name: "others", value: 189, fill: "#AF19A1" },
  ];

  const initialData = [
    { name: "Page A", totalexpense: 4000, totalbalance: 2400, totalExpense: 2400, totalBalance: 4000 },
    { name: "Page B", totalexpense: 3000, totalbalance: 1398, totalExpense: 2210, totalBalance: 1500 },
  ];

  const [data, setData] = useState(initialData);
  const [responseData, setResponseData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/data");
        console.log("Response Data:", response.data);
        const newTotalExpense = parseInt(response.data.totalExpense || 0) + parseInt(responseData || 0);

        const checkElement = document.getElementById("ds2");
        const b = document.getElementById("check");
        if (checkElement) {
          const amountValue = response.data.amount || 0;
          console.log("Amount Value:", amountValue);

          const number = parseInt(amountValue);
          console.log("Parsed Number:", number);
          setResponseData(number);
          checkElement.innerHTML = responseData + number;
          b.innerHTML = 150000 - responseData;

          const newData = [...data];
          
        } else {
          console.error("Element with ID 'ds2' not found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [responseData]);

  return (
    <div style={{ position: "absolute", left: "241px", border: "1px solid black", height: "100vh", width: "83vw" }}>
      <div id="income">
        <FaRupeeSign id="signincome" />
        <div id="amountincome">
          <h6 id="infoincome">Total Income</h6>
          <h3>150000</h3>
        </div>
      </div>

      <div id="expense">
        <FaRupeeSign id="signexpense" />
        <div id="amountexpense">
          <h6 id="infoexpense">Total Expense</h6>
          <h3 id="ds2"></h3>
        </div>
      </div>

      <div id="balance">
        <FaRupeeSign id="signbalance" />
        <div id="amountbalance">
          <h6 id="infobalance">Total Balance</h6>
          <h3 id="check"></h3>
        </div>
      </div>

      <div id="chart" style={{ border: "1px solid gray", width: "400px", height: "500px", boxShadow: "3px 3px 3px 3px gray", borderRadius: "30px" }}>
        <PieChart width={400} height={400} style={{ position: "relative", top: "150px" }}>
          <Pie dataKey="value" isAnimationActive={false} data={data01} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </div>

      <div id="linechart" style={{ position: "relative", left: "400px", top: "-500px" }}>
        <LineChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalexpense" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="totalbalance" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}
export default Dashboard;