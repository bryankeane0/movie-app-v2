import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import img from '../../../images/actor-poster-placeholder.jpg';
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ActorIcon from "@material-ui/icons/Person";
import {Link} from "react-router-dom";
import {CardActionArea} from "@material-ui/core";
import {Tooltip} from "@material-ui/core";
import {Zoom} from "@material-ui/core";

const useStyles = makeStyles({
    card: { maxWidth: 345},
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    }
});

export default function ActorCard({ actor }) {
    const classes = useStyles();

    return (
        <Tooltip TransitionComponent={Zoom} title={`${actor.name} Details`}>
           <Link to={`/actor/${actor.id}`}>
                <Card className={classes.card} >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                                    : img
                            }
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography variant="h6" component="p">
                                        <ActorIcon fontSize="small" />
                                        {actor.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Tooltip>
    );
}