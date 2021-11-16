import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInfoDisplay from "./components/UserInfoDisplay";
import { Header } from "./components/layout/Header";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import LeagueDetails from "./components/pages/LeagueDetails";
import SeasonsAvailable from "./components/pages/SeasonsAvailable";
import Standings from "./components/pages/Standings";
import LeagueState from "./context/leagues/LeagueState";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#2e7d32" }}>
      <LeagueState>
        <Router>
          <Box
            sx={{
              display: "flex",
              p: 1,
              mb: 2,
              bgcolor: "success.main",
              border: 2,
              borderColor: "white",
            }}
          >
            <Header></Header>
            <Box sx={{ ml: 1 }}>
              <b>Football Keeping</b>
            </Box>
          </Box>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/LeagueDetails" element={<LeagueDetails />}></Route>
            <Route
              path="/SeasonsAvailable"
              element={<SeasonsAvailable />}
            ></Route>
            <Route path="/Standings" element={<Standings />}></Route>
          </Routes>
        </Router>
      </LeagueState>

      {/* <UserInfoDisplay
        text="Sandeep"
        person={{ firstName: "", lastName: "" }}
      ></UserInfoDisplay> */}
    </div>
  );
}

export default App;
