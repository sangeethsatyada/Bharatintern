import React,{useEffect,useState} from "react";
import axios from 'axios';
function Transactions() {
  const [persistedData, setPersistedData] = useState([]);
  function newCategory() {
    let panel = document.getElementById("transcation");
    panel.hidden = !panel.hidden;
  }
   useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("transactionsData")) || [];
    setPersistedData(storedData);
  }, []);
  function submitpanel(event) {
    event.preventDefault();
    let date = document.getElementById("date")?.value;
    let categoryvalue = document.getElementById("categoryvalue")?.value;
    let amount = document.getElementById("amount")?.value;
    console.log(amount);
    let ty = document.getElementById("type")?.value;
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let textNode1 = document.createTextNode(categoryvalue);
    td1.appendChild(textNode1);
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    let textNode2 = document.createTextNode(ty);
    td2.appendChild(textNode2);
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    let textNode3 = document.createTextNode(amount);
    td3.appendChild(textNode3);
    tr.appendChild(td3);

    let del = document.createElement("button");
    let txt = document.createTextNode("Delete");
    del.appendChild(txt);
    tr.appendChild(del);

    table.appendChild(tr);

    del.addEventListener("click", () => {
      let li = del.parentElement;
      li.remove();
    });
    const newData = { category: categoryvalue, type: ty, amount };
    localStorage.setItem("transactionsData", JSON.stringify([...persistedData, newData]));
    setPersistedData([...persistedData, newData]);
    axios.post("http://127.0.0.1:8080/",{amount,categoryvalue,ty,date}).then((msg)=>console.log("success")).catch((err)=>console.log(err));
  }

  return (
    <>
      <div style={{ position: "absolute", left: "241px", border: "1px solid black", height: "100vh", width: "83vw" }}>
        <div id="main-panel" style={{ position: "relative", left: "100px", top: "100px" }}>
          <button onClick={newCategory} style={{ position: "relative", left: "500px", top: "50px" }}>
            +New Category
          </button>
          <h2>Categories</h2>
          <div id="tablelay">
            <table id="table">
              <tr>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div
        id="transcation"
        style={{
          border: "1px solid gray",
          height: "430px",
          width: "400px",
          backgroundColor: "black",
          position: "relative",
          left: "900px",
          top: "200px",
          borderRadius: "30px",
        }}
        hidden
      >
        <form id="newtrans" onSubmit={submitpanel}>
            <label style={{ position: "relative", top: "10px", left: "20px" }}>Date</label>
          <input type="date" style={{ position: "relative", top: "30px", left: "20px" }} id="date" />
          <label style={{ position: "relative", top: "50px", left: "20px" }}>Category</label>
          <select
            style={{
              position: "relative",
              top: "60px",
              left: "20px",
              width: "310px",
              padding: "5px",
              backgroundColor: "black",
              color: "white",
            }}
            id="categoryvalue"
          >
            <option disabled selected value>
              Select
            </option>
            <option>Travel</option>
            <option>Education</option>
            <option>HealthCare</option>
            <option>Garments</option>
            <option>Grocery</option>
            <option>Eating Outside</option>
            <option>Entertainments</option>
            <option>Salary</option>
          </select>
          <label style={{ position: "relative", top: "60px", left: "20px" }}>Type</label>
          <select
            style={{
              position: "relative",
              top: "70px",
              left: "20px",
              width: "310px",
              padding: "5px",
              backgroundColor: "black",
              color: "white",
            }}
            id="type"
          >
            <option disabled selected value>
              Select
            </option>
            <option>Expense</option>
            <option>income</option>
          </select>
          <label style={{ position: "relative", top: "70px", left: "20px" }}>Amount</label>
          <input
            type="number"
            style={{
              position: "relative",
              top: "80px",
              left: "20px",
              padding: "5px",
              width: "300px",
              backgroundColor: "black",
              color: "white",
            }}
            id="amount"
          />
          <label style={{ position: "relative", top: "90px", left: "20px" }}>Note</label>
          <textarea
            style={{
              position: "relative",
              top: "100px",
              left: "20px",
              height: "50px",
              width: "310px",
              backgroundColor: "black",
              color: "white",
            }}
            id="note"
          ></textarea>
          <input type="submit" value="submit" style={{ position: "relative", top: "110px", left: "20px" }} />
        </form>
      </div>
      
    </>
  );
}

export default Transactions;
