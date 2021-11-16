import React, { Fragment, ReactElement } from "react";
import { LeagueDetailsInterface } from "./../../context/leagueDetails/leagueDetailsContext";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

interface Props {
  leagueInfo: [LeagueDetailsInterface] | null;
}

const LeagueTable: React.FC<Props> = ({ leagueInfo }: Props): ReactElement => {
  const navigate = useNavigate();
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

  const callStandings = () => {
    navigate("/Standings");
  };
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>League Name</StyledTableCell>
              <StyledTableCell align="right">Start Date</StyledTableCell>
              <StyledTableCell align="right">End Date</StyledTableCell>
              <StyledTableCell align="right">Year</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leagueInfo !== null &&
              leagueInfo.map((season) => (
                <StyledTableRow
                  key={season.displayName}
                  onClick={callStandings}
                >
                  <StyledTableCell component="th" scope="row">
                    {season.displayName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {season.startDate}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {season.endDate}
                  </StyledTableCell>

                  <StyledTableCell align="right">{season.year}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default LeagueTable;
