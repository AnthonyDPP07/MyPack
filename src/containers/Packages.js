import React from "react";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#00aeff",
    color: theme.palette.common.white,
    fontSize: 14,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createData(
  tranckIn,
  trackOut,
  description,
  weight,
  price,
  supplier,
  courier
) {
  return { tranckIn, trackOut, description, weight, price, supplier, courier };
}

const rows = [
  createData(
    "NX-U123456789",
    "USPS123456789",
    "Television 32 pulgadas",
    30.0,
    2154.2,
    "Amazon",
    "USPS"
  ),
  createData(
    "NX-F123456789",
    "Fedex123456789",
    "Iphone XS",
    1.3,
    1432.1,
    "Apple",
    "Fedex"
  ),
];

const Packages = () => {
  const URL_API =
    "https://courierdemo.azurewebsites.net/api/packages/getPending?username={jsanchez}";

  const apiRes = async () => {
    const response = await axios.get(URL_API);

    console.log(response);
  };

  const classes = useStyles();

  return (
    <div className="content pack-content">
      <h2>Packages</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                Internal Tracking
              </StyledTableCell>
              <StyledTableCell align="center">
                Courier Trancking
              </StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Weight</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Supplier</StyledTableCell>
              <StyledTableCell align="center">Courier</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.tranckIn}>
                <StyledTableCell align="center">{row.tranckIn}</StyledTableCell>
                <StyledTableCell align="center">{row.trackOut}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="center">{row.weight}</StyledTableCell>
                <StyledTableCell align="center">{row.price}</StyledTableCell>
                <StyledTableCell align="center">{row.supplier}</StyledTableCell>
                <StyledTableCell align="center">{row.courier}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Packages;
