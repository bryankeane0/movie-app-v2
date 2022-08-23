import {Typography, Fab, Drawer, Paper, Chip } from "@mui/material";
import {AccessTime, MonetizationOn, StarRate, Navigation} from "@mui/icons-material";
import {Grid, makeStyles} from "@material-ui/core";
import React, { useState} from "react";
import TemplateReviews from "../templateReviews";
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import img from "../../../images/actor-poster-placeholder.jpg";

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

const TemplateDetails = ({ obj, type }) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isPerson = type === "person";
    let image;
    type === "person" ? image = obj.profile_path : image = obj.poster_path

    return (
        <>
            <Grid item xs={3}>
                <div className={classes.summary}>
                    <Card>
                        <CardMedia>
                            <img
                                width={"100%"}
                                src={`https://image.tmdb.org/t/p/w500/${image}`}
                                alt={img}
                            />
                        </CardMedia>
                        <CardContent>
                            <TextInfoContent
                                heading={
                                    isPerson ?
                                        "Known For" :
                                        ""
                                }
                                body={
                                    isPerson ?
                                        obj.known_for_department :
                                        obj.test
                                }
                            />
                            <TextInfoContent
                                heading={"Gender"}
                                body={
                                    actor.gender === 1 ? "Female"
                                        : actor.gender === 2 ? "Male"
                                            : "Other"
                                }
                            />
                            <TextInfoContent
                                heading={"Birthdate"}
                                body={actor.birthday}
                            />
                            <TextInfoContent
                                heading={"Place of Birth"}
                                body={actor.place_of_birth}
                            />
                            <TextInfoContent
                                heading={"Also Known As"}
                                body={actor.also_known_as.map((item) => item).join(', ')}
                            />
                        </CardContent>
                    </Card>
                </div>
            </Grid>

            <Grid item xs={9}>
                <Typography variant="h5" component="h3" className={classes.boldText}>
                    Biography
                </Typography>
                <br/>
                <Typography variant="h6" component="p">
                    {actor.biography}
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
            </Grid>
        </>
    );
};

export default TemplateDetails;

const TemplateDetails = ({ obj, type }) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isPerson = type === "person";

    return (
        <>
            <Typography variant="h5" component="h3" className={classes.boldText}>
                {isPerson ?
                    "Biography" :
                    "Overview"
                }
            </Typography>
            <br/>
            <Typography variant="h6" component="p">
                {isPerson ?
                    obj.biography :
                    obj.overview
                }
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
                    label={`${obj.vote_average} (${obj.vote_count})`}
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

export default TemplateDetails;