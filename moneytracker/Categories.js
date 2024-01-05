import React from "react";
import "./App.css";
function Categories()
{
  function g(){
    let val=document.getElementById("newcat").value;
    if(val===""){
      document.getElementById("newcat").style.border="1px solid red";
    }
    else{
      let con=document.getElementById("categoryvalue");
      let h3=document.createElement("h3");
      let txtnode=document.createTextNode(val);
      h3.appendChild(txtnode);
      con.appendChild(h3);
      document.getElementById("newcat").style.border="1px solid black";
    }
  }
  return(
    <>
    <div id="transcation" style={{border:'1px solid gray',height:'500px',width:'400px',backgroundColor:'black',position:'relative',left:'900px',top:'50px',borderRadius:'30px',overflowY:'scroll'}}>
        <div style={{position:'relative',top:'60px',left:'10px',width:'310px',padding:'5px',backgroundColor:'black',color:'white'}} id="categoryvalue">
          <option disabled selected value>Categories</option>
          <h3>Travel</h3>
          <h3>Education</h3>
          <h3>HealthCare</h3>
          <h3>Garments</h3>
          <h3>Grocery</h3>
          <h3>Eating Outside</h3>
          <h3>Entertainments</h3>
          <h3>Salary</h3>
        </div>
        </div>
        <input type="text" id="newcat" style={{position:'relative',backgroundColor:'black',left:'500px',top:'-300px',padding:'5px',color:'white'}} placeholder="Enter New Category"/>
        <button onClick={g} style={{position:'relative',backgroundColor:'black',left:'500px',top:'-250px',padding:'5px',color:'white',cursor:'pointer',width:'100px'}}>Add</button>
        </>
  )
}
export default Categories;