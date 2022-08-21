import {Typography, Fab, Drawer, Paper, Chip } from "@mui/material";
import {AccessTime, MonetizationOn, StarRate, Navigation} from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState} from "react";
import TemplateReviews from "../templateReviews";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: theme.spacing(1.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    boldText: {
        fontWeight: "bold"
    }
}));

const TemplateDetails = ({ obj }) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Typography variant="h5" component="h3" className={classes.boldText}>
                Overview
            </Typography>
            <br/>
            <Typography variant="h6" component="p">
                {obj.overview}
            </Typography>

            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Genres" className={classes.chip} color="primary" />
                </li>
                {obj.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} className={classes.chip} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" className={classes.root}>
                <Chip icon={<AccessTime />} label={`${obj.runtime} min.`} />
                <Chip
                    icon={<MonetizationOn />}
                    label={`${obj.vote_average.toLocaleString()}`}
                />
                <Chip
                    icon={<StarRate />}
                    label={`${obj.vote_average} (${obj.vote_count}`}
                />
                <Chip label={`Released: ${obj.release_date}`} />
            </Paper>
            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Production Countries" className={classes.chip} color="primary" />
                </li>
                {obj.production_countries.map((c) => (
                    <li key={c.name}>
                        <Chip label={c.name} className={classes.chip} />
                    </li>
                ))}
            </Paper>

            <Fab
                color="secondary"
                variant="extended"
                onClick={() =>setDrawerOpen(true)}
                className={classes.fab}
            >
                <Navigation />
                Reviews
            </Fab>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <TemplateReviews obj={obj} />
            </Drawer>
        </>
    );
};

export default TemplateDetails ;