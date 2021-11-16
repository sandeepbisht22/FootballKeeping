import { createContext } from "react";

export interface teamsInfoInterface {
  standings: { name: string; logo: string; rank: number }[];
}

export interface standingInterface {
  name: string;
  seasonDisplay: string;
  standings: [teamsInfoInterface] | null;
  getTeamStandings: (id: string, seasonyear: string) => void;
}

export default createContext<standingInterface | null>(null);
