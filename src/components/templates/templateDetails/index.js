import {Typography, Fab, Drawer, Paper, Chip } from "@mui/material";
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
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    }
}));

const TemplateDetails = ({ obj, type }) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isPerson = type === "person", isTv = type === "tv", isMovie = type === "movie";
    let image;
    type === "person" ? image = obj.profile_path : image = obj.poster_path

    return (
        <>
            <Grid container spacing={5} style={{ padding: "15px" }}>
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
                                        isMovie ?
                                            "Revenue" :
                                            "Number of Episodes"
                                    }
                                    body={
                                        isPerson ?
                                            obj.known_for_department :
                                        isMovie ?
                                            obj.revenue :
                                            obj.number_of_episodes
                                    }
                                />
                                <TextInfoContent
                                    heading={
                                        isPerson ?
                                            "Gender" :
                                        isMovie ?
                                            "Runtime" :
                                            "Number of Seasons"
                                    }
                                    body={
                                        isPerson ?
                                            obj.gender === 1 ? "Female"
                                                : obj.gender === 2 ? "Male"
                                                    : "Other"
                                            :
                                        isMovie ?
                                            obj.runtime :
                                            obj.number_of_seasons
                                    }
                                />
                                <TextInfoContent
                                    heading={
                                        isPerson ?
                                            "Birthdate" :
                                        isMovie ?
                                            "Revenue" :
                                            "Show Status"
                                    }
                                    body={
                                        isPerson ?
                                            obj.birthday :
                                        isMovie ?
                                            obj.revenue :
                                            obj.status
                                    }
                                />
                                <TextInfoContent
                                    heading={
                                        isPerson ?
                                            "Place of Birth" :
                                            "Released"
                                    }
                                    body={
                                        isPerson ?
                                            obj.place_of_birth :
                                        isTv ?
                                            obj.first_air_date :
                                            obj.release_date
                                    }
                                />
                                <TextInfoContent
                                    heading={
                                        isPerson ?
                                            "Also Known As" :
                                            "Genres"
                                    }
                                    body={
                                        isPerson ?
                                            obj.also_known_as.map((item) => item).join(', ') :
                                            obj.genres.map((item) => item.name).join(', ')
                                    }
                                />
                                {
                                    !isPerson ?
                                        <TextInfoContent
                                            heading={"Production Countries"}
                                            body={obj.production_countries.map((item) => item.name).join(', ')}
                                        /> :
                                        null
                                }
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h5" component="h3" className={classes.boldText}>
                        {
                            isPerson ?
                                "Biography" :
                                "Overview"
                        }

                    </Typography>
                    <br/>
                    <Typography variant="h6" component="p">
                        {
                            isPerson ?
                                obj.biography :
                                obj.overview
                        }
                    </Typography>
                    <br/>
                    <Typography variant="h5" component="h3" className={classes.boldText}>
                        {
                            isPerson ?
                                "Credits" :
                                null
                        }
                    </Typography>
                </Grid>
            </Grid>

        </>
    );
};

export default TemplateDetails;
