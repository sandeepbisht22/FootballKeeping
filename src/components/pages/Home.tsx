import axios from "axios";
import React, { useEffect, useContext, Fragment } from "react";
import LeagueContext from "./../../context/leagues/leagueContext";
import { leaguesInterface } from "../../context/leagues/leagueContext";

interface Props {}

const Home = (props: Props) => {
  const leagueContext = useContext(LeagueContext);
  const { leaguesData, loading, error, getAllLeagues } =
    leagueContext as leaguesInterface;
  useEffect(() => {
    // const  getAllLeagues = async () => {
    try {
      getAllLeagues();
    } catch (error) {}
  }, []);
  return (
    <Fragment>
      {leaguesData !== null && (
        <div>Length is {JSON.stringify(leaguesData)}</div>
      )}
    </Fragment>
  );
};

export default Home;
