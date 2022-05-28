import React from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    padding: theme.spacing(1.5),
  },
}));
export default function Course(props) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.root} variant="h4" component="h1">
        {`${props.title} modules table`}
      </Typography>
      <TableContainer component={"div"}>
        <Table aria-label="modules table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>No. of Lectures</TableCell>
              <TableCell>No. of Practicals</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.modules.map((m, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {m.name}
                </TableCell>
                <TableCell>{m.noLectures}</TableCell>
                <TableCell>{m.noPracticals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
