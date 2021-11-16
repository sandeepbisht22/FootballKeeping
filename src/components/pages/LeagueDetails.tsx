import React, { ReactElement, useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import LeagueDetailsContext from "../../context/leagueDetails/leagueDetailsContext";
import { allSeasonInterface } from "../../context/leagueDetails/leagueDetailsContext";
import LeagueTable from "../common/LeagueTable";

const LeagueDetails: React.FC = (): JSX.Element => {
  const params = useParams();
  const context = useContext(LeagueDetailsContext);
  const { allSeasons, getAllSeasons, error, loading } =
    context as allSeasonInterface;
  useEffect(() => {
    getAllSeasons(params.id!);
  }, []);
  return (
    <Fragment>
      <div>League Details</div>
      <LeagueTable leagueInfo={allSeasons}></LeagueTable>
    </Fragment>
  );
};

export default LeagueDetails;
