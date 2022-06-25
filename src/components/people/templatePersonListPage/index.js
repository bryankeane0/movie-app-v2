import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PeopleList from "../personList";
import Header from "../../movies/headerMovieList";

const useStyles = makeStyles({
    root: {
        padding: "20px",
    },
});

function PersonListPageTemplate({ people, title }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Header title={title} />
            </Grid>
            <Grid item xs={12}>
                <PeopleList people={people} />
            </Grid>
        </Grid>
    );
}
export default PersonListPageTemplate;