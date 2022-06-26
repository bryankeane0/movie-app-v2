import React from "react";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { makeStyles, Paper, IconButton, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: theme.spacing(1.5),
        margin: 0,
    },
    tagLine: {
        fontSize: "1.5rem",
    },
}));

const PersonHeader = ({ person, history}) => {
    const classes = useStyles();

    return (
        <Paper component="div" className={classes.root}>
            <IconButton aria-label="go back" onClick={() => history.goBack()} >
                <ArrowBack color="primary" fontSize="large" />
            </IconButton>

            <Typography variant="h4" component="h3">
                {person.name}
                <br />
            </Typography>
            <IconButton aria-label="go forward" onClick={() => history.goForward() } >
                <ArrowForward color="primary" fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default withRouter(PersonHeader);