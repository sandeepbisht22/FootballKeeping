import { createContext } from "react";

export interface teamsInfoInterface {
  note: {
    rank: number;
  };
  team: {
    name: string;
    logos: {
      href: "";
    }[];
  };
}

export interface standingInterface {
  name: string;
  seasonDisplay: string;
  standings: teamsInfoInterface[] | null;
  getTeamStandings: (id: string, seasonyear: string) => void;
}

export default createContext<standingInterface | null>(null);
