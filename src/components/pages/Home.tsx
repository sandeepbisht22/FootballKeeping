import React, { useEffect, useContext, Fragment } from "react";
import LeagueContext from "./../../context/leagues/leagueContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { leaguesInterface } from "../../context/leagues/leagueContext";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

interface Props {}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = (props: Props) => {
  const navigate = useNavigate();
  const leagueContext = useContext(LeagueContext);
  const { leaguesData, loading, error, getAllLeagues } =
    leagueContext as leaguesInterface;
  useEffect(() => {
    try {
      getAllLeagues();
    } catch (error) {}
  }, []);

  const exploreLeague = (id: string) => {
    console.log("Button clicked");
    navigate(`/LeagueDetails/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {leaguesData !== null &&
        leaguesData.map((leagues) => {
          return (
            <Grid item xs={4}>
              <Item>
                <Card sx={{ height: "350px" }}>
                  <CardMedia
                    component="img"
                    sx={{ height: "200px", width: "200px" }}
                    image={leagues.logos.light}
                    alt="Clubs"
                    style={{ margin: "auto" }}
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {leagues.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(event: React.MouseEvent<HTMLElement>) => {
                        exploreLeague(leagues.id);
                      }}
                    >
                      Explore League
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Home;
