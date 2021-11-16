import React, { ReactElement, useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import LeagueDetailsContext from "../../context/leagueDetails/leagueDetailsContext";
import LeagueTable from "../common/LeagueTable";
import { allSeasonInterface } from "../../context/leagueDetails/leagueDetailsContext";

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
      <LeagueTable leagueInfo={allSeasons} leagueId={params.id!}></LeagueTable>
    </Fragment>
  );
};

export default LeagueDetails;
