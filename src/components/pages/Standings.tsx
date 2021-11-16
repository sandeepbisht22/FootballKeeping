import React, { ReactElement, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import StandingsContext, {
  standingInterface,
} from "../../context/standings/standingsContext";
interface Props {}

const Standings: React.FC = () => {
  const params = useParams();

  const context = useContext(StandingsContext);
  const { getTeamStandings, name, seasonDisplay, standings } =
    context as standingInterface;
  useEffect(() => {
    getTeamStandings(params.id!, params.seasonyear!);
  }, []);
  return <div>{standings !== null && JSON.stringify(standings)}</div>;
};

export default Standings;
