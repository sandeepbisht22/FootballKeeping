import leagueDetailContext, {
  allSeasonInterface,
} from "./leagueDetailsContext";
import { useReducer } from "react";
import LeagueDetailReducer from "./leagueDetailsReducer";
import React, { ReactElement } from "react";
import axios from "axios";

interface Props {}

const LeagueDetailsState: React.FunctionComponent<Props> = (props) => {
  const intialState: allSeasonInterface = {
    allSeasons: null,
    getAllSeasons: (id: string) => {},
    error: { msg: "" },
    loading: false,
  };
  const [state, dispatch] = useReducer(LeagueDetailReducer, intialState);
  const getAllSeasons = async (id: string) => {
    const res = await axios.get(
      `https://api-football-standings.azharimm.site/leagues/${id}/seasons`
    );
    dispatch({
      type: "LEAGUE_DETAILS",
      payload: res.data.data.seasons,
    });
  };
  return (
    <leagueDetailContext.Provider
      value={{
        allSeasons: state.allSeasons,
        error: state.error,
        loading: state.loading,
        getAllSeasons,
      }}
    >
      {props.children}
    </leagueDetailContext.Provider>
  );
};

export default LeagueDetailsState;
