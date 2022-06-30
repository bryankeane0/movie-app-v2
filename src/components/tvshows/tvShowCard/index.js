import React, { useContext  } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import img from '../../../images/film-poster-placeholder.png';
import Avatar from "@material-ui/core/Avatar";
import ShowContext from "../../../contexts/showContext";
import AddToMustWatchIcon from "../../cardIcons/addToMustWatch";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TvShowCard({ tvshow, action }) {
  const classes = useStyles();
  const { favorites } = useContext(ShowContext);
  const { mustwatch } = useContext(ShowContext);

  tvshow.favorite = !!favorites.find((id) => id === tvshow.id);
  tvshow.mustwatch = !!mustwatch.find((id) => id === tvshow.id);

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          tvshow.favorite ? (
            <Avatar className={classes.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : tvshow.mustwatch ? (
            <Avatar className={classes.avatar}>
              <AddToMustWatchIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {tvshow.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={
          tvshow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tvshow.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvshow.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(tvshow)}
        <Link to={`/tvshows/${tvshow.id}`}>
            <Button variant="outlined" size="medium" color="primary">
                More Info ...
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}