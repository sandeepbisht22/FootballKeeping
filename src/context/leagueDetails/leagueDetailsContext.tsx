import { createContext } from "react";

export interface LeagueDetailsInterface {
  year: string;
  displayName: string;
  startDate: string;
  endDate: string;
}
export interface allSeasonInterface {
  allSeasons: [LeagueDetailsInterface] | null;
  getAllSeasons: (id: string) => void;
  error: { msg: string };
  loading: boolean;
}
export default createContext<allSeasonInterface | null>(null);
