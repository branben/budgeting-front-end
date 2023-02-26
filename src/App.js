import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import NewTransaction from "./NewTransaction";
import ShowTransaction from "./ShowTransaction";
import EditTransaction from "./EditTransaction";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions/:id" element={<ShowTransaction />} />
        <Route path="/transactions/new" element={<NewTransaction />} />
        <Route path="/transactions/:id/edit" element={<EditTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;
