import { teamsInfoInterface, standingInterface } from "./standingsContext";
type standingAction = {
  type: "GET_STANDING";
  payload: standingInterface;
};
export default (state: standingInterface, action: standingAction) => {
  switch (action.type) {
    case "GET_STANDING":
      return {
        ...state,
        standings: action.payload.standings,
        name: action.payload.name,
        seasonDisplay: action.payload.seasonDisplay,
      };
    default:
      return state;
  }
};
