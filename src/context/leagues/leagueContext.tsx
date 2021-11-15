import { createContext } from "react";
export interface leagueInterface {
  id: string;
  name: string;
  slug: string;
  abbr: string;
  logos: {
    light: string;
    dark: string;
  };
}
export interface leaguesInterface {
  leaguesData: leagueInterface[] | null;
  loading: boolean;
  error: string;
  getAllLeagues: () => void;
}
export default createContext<leaguesInterface | null>(null);
