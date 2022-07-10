import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ActorsList from "../actorList";
import Header from "../../movies/headerMovieList";

const useStyles = makeStyles({
    root: {
        padding: "20px",
    },
});

function ActorListPageTemplate({ actors, title }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Header title={title} />
            </Grid>
            <Grid item container spacing={5}>
                <ActorsList actors={actors}/>
            </Grid>
        </Grid>
    );
}
export default ActorListPageTemplate;