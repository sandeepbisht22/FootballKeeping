import React, { useReducer } from "react";
import StandingReducer from "./standingReducer";
import StandingContext, {
  teamsInfoInterface,
  standingInterface,
} from "./standingsContext";

import axios from "axios";

interface Props {}

const StandingState: React.FunctionComponent<Props> = (props) => {
  const initialState: standingInterface = {
    name: "",
    seasonDisplay: "",
    standings: null,
    getTeamStandings: (id: string, seasonyear: string) => {},
  };
  const [state, dispatch] = useReducer(StandingReducer, initialState);
  const getTeamStandings = async (id: string, seasonyear: string) => {
    const res = await axios.get(
      `https://api-football-standings.azharimm.site/leagues/${id}/standings?season=${seasonyear}&sort=asc`
    );
    dispatch({
      type: "GET_STANDING",
      payload: res.data.data,
    });
  };
  return (
    <StandingContext.Provider
      value={{
        name: state.name,
        seasonDisplay: state.seasonDisplay,
        standings: state.standings,
        getTeamStandings,
      }}
    >
      {props.children}
    </StandingContext.Provider>
  );
};

export default StandingState;
