import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import img from '../../../images/film-poster-placeholder.png';
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import {Link} from "react-router-dom";
import {CardActionArea} from "@material-ui/core";

const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    }
});

export default function PersonCard({ person }) {
    const classes = useStyles();

    return (
        <Link to={`/person/${person.id}`}>
            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={
                            person.profile_path
                                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                                : img
                        }
                    />
                    <CardContent>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="h6" component="p">
                                    <PersonIcon fontSize="small" />
                                    {person.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}