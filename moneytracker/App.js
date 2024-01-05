
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Categories from "./Categories";
import Transactions from "./Transactions";
import Reports from "./Reports";
import Settings from "./Settings";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/Transactions" element={<Transactions/>}/>
        <Route path="/Reports" element={<Reports/>}/>
        <Route path="/Settings" element={<Settings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
