import React, { useContext } from "react";
import SportsSoccerSharpIcon from "@mui/icons-material/SportsSoccerSharp";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import LeagueContext, {
  leaguesInterface,
} from "../../context/leagues/leagueContext";

interface Props {}

export const Header = (props: Props) => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const leagueContext = useContext(LeagueContext);

  const { leaguesData } = leagueContext as leaguesInterface;

  const handleChange = (event: SelectChangeEvent) => {
    navigate(`/LeagueDetails/${event.target.value}`);
  };
  const goHome = () => {
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#FFF", color: "#2e7d32" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={goHome}
          >
            <SportsSoccerSharpIcon sx={{ fontSize: 50 }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Football Keeping
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Leagues</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              {leaguesData?.map((league) => (
                <MenuItem value={league.id!}>{league.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
