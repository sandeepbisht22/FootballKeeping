import leagueContext, {
  leagueInterface,
  leaguesInterface,
} from "./leagueContext";
import leagueReducer from "./leagueReducer";
import React, { useReducer } from "react";
import axios from "axios";

interface Props {}

const LeagueState: React.FunctionComponent<Props> = (props) => {
  const initialState: leaguesInterface = {
    leaguesData: [
      {
        id: "",
        name: "",
        slug: "",
        abbr: "",
        logos: {
          light: "",
          dark: "",
        },
      },
    ],
    loading: false,
    error: "",
    getAllLeagues: () => {},
  };

  const [state, dispatch] = useReducer(leagueReducer, initialState);

  const getAllLeagues = async () => {
    const res = await axios.get(
      "https://api-football-standings.azharimm.site/leagues"
    );
    dispatch({
      type: "ALL_LEAGUES",
      payload: res.data.data,
    });
  };

  return (
    <leagueContext.Provider
      value={{
        leaguesData: state.leaguesData,
        loading: state.loading,
        error: state.error,
        getAllLeagues,
      }}
    >
      {props.children}
    </leagueContext.Provider>
  );
};

export default LeagueState;
