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
import LeagueDetailsState from "./context/leagueDetails/LeagueDetailsState";
import StandingState from "./context/standings/StandingState";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#2e7d32" }}>
      <LeagueState>
        <LeagueDetailsState>
          <StandingState>
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
                <Route
                  path="/LeagueDetails/:id"
                  element={<LeagueDetails />}
                ></Route>
                <Route
                  path="/SeasonsAvailable"
                  element={<SeasonsAvailable />}
                ></Route>
                <Route
                  path="/Standings/:id/:seasonyear"
                  element={<Standings />}
                ></Route>
              </Routes>
            </Router>
          </StandingState>
        </LeagueDetailsState>
      </LeagueState>

      {/* <UserInfoDisplay
        text="Sandeep"
        person={{ firstName: "", lastName: "" }}
      ></UserInfoDisplay> */}
    </div>
  );
}

export default App;
