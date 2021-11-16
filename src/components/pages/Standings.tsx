import React, { ReactElement, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import StandingsContext, {
  standingInterface,
} from "../../context/standings/standingsContext";
interface Props {}

const Standings: React.FC = () => {
  const params = useParams();

  const context = useContext(StandingsContext);
  const { getTeamStandings, name, seasonDisplay, standings } =
    context as standingInterface;
  useEffect(() => {
    getTeamStandings(params.id!, params.seasonyear!);
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div>
      {standings !== null && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Rank</StyledTableCell>
                <StyledTableCell align="center">Team Logo</StyledTableCell>
                <StyledTableCell align="center">Team Name</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standings.map((standing, i) => (
                <StyledTableRow key={standing.team.name}>
                  <StyledTableCell component="th" scope="row">
                    {i + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <img
                      src={standing.team.logos[0].href}
                      style={{ height: "200px", width: "200px" }}
                      alt=""
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {standing.team.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Standings;
