import React from "react";
import {Chip, Typography, makeStyles, Paper} from "@material-ui/core";

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

const PersonDetails = ({ person }) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h5" component="h3" className={classes.boldText}>
                Biography
            </Typography>
            <br/>
            <Typography variant="h6" component="p">
                {person.biography}
            </Typography>
            <br/>
            <Typography variant="h5" component="h3" className={classes.boldText}>
                Movie Credits
            </Typography>

            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="TODO" className={classes.chip} color="primary" />
                </li>
            </Paper>
        </>
    );
};

export default PersonDetails;