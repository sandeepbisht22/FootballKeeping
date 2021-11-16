import {
  allSeasonInterface,
  LeagueDetailsInterface,
} from "./leagueDetailsContext";
type leagueDetailsAction = {
  type: "LEAGUE_DETAILS";
  payload: [LeagueDetailsInterface];
};
export default (state: allSeasonInterface, action: leagueDetailsAction) => {
  switch (action.type) {
    case "LEAGUE_DETAILS":
      return {
        ...state,
        allSeasons: action.payload,
      };
    default:
      return state;
  }
};
