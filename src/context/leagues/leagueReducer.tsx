import { leaguesInterface, leagueInterface } from "./leagueContext";

type leagueAction = {
  type: "ALL_LEAGUES";
  payload: leagueInterface;
};

export default (state: leaguesInterface, action: leagueAction) => {
  switch (action.type) {
    case "ALL_LEAGUES":
      return {
        ...state,
        leaguesData: [action.payload, ...state.leaguesData!],
      };
    default:
      return state;
  }
};
