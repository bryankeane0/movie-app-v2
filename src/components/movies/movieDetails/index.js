import {ImageListItem, ImageList, Grid, Typography, Fab, Drawer, Paper, Chip } from "@mui/material";
import {AccessTime, MonetizationOn, StarRate, Navigation} from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState} from "react";
import MovieReviews from "../movieReviews";
import {useQuery} from "react-query";
import {getImages} from "../../../api/tmdb-api";
import Spinner from "../../spinner";

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
    },
    summary: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
}));

const MovieDetails = ({ movie }) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { data , error, isLoading, isError } = useQuery(["images", { id: movie.id }, "movie"], getImages);
    if (isLoading) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;
    const images = data.posters

    return (
    <>
        <Grid item xs={3}>
            <div className={classes.summary}>
                <ImageList rowHeight={500} className={classes.imageList} cols={1}>
                    {images.map((image) => (
                        <ImageListItem key={image.file_path} className={classes.imageListItem} cols={1}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                alt={image.poster_path}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </Grid>
        <Grid item xs={9}>
            <Typography variant="h5" component="h3" className={classes.boldText}>
                Overview
            </Typography>
            <br/>
            <Typography variant="h6" component="p">
                {movie.overview}
            </Typography>

            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Genres" className={classes.chip} color="primary" />
                </li>
                {movie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} className={classes.chip} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" className={classes.root}>
                <Chip icon={<AccessTime />} label={`${movie.runtime} min.`} />
                <Chip
                    icon={<MonetizationOn />}
                    label={`${movie.revenue.toLocaleString()}`}
                />
                <Chip
                    icon={<StarRate />}
                    label={`${movie.vote_average} (${movie.vote_count})`}
                />
                <Chip label={`Released: ${movie.release_date}`} />
            </Paper>
            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Production Countries" className={classes.chip} color="primary" />
                </li>
                {movie.production_countries.map((c) => (
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
                <MovieReviews movie={movie} />
            </Drawer>
        </Grid>

    </>
  );
};

export default MovieDetails;