import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import img from "../../../images/actor-poster-placeholder.jpg";
import ActorHeader from "../headerActor";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from '@mui-treasury/components/content/textInfo';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
}));

const TemplateActorPage = ({ actor, children }) => {
    const classes = useStyles();

    return (
        <>
            <ActorHeader actor={actor} />

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div className={classes.root}>
                        <Card>
                            <CardMedia>
                                <img
                                    width={"100%"}
                                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                    alt={img}
                                />
                            </CardMedia>
                            <CardContent>
                                <TextInfoContent
                                    heading={"Known For"}
                                    body={actor.known_for_department}
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
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateActorPage;