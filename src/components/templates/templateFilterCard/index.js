import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import img from '../../../images/pexels-dziana-hasanbekava-5480827.jpg';
import { getGenres } from "../../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../../spinner';
import Toolbar from "@mui/material/Toolbar";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: 500,
    },
    media: { height: 300 },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        backgroundColor: "rgb(255, 255, 255)",
    },
}));

const TemplateFilterCard = ({ type, genreFilter, onUserInput, titleFilter }) => {
    const classes = useStyles();
    const { data, error, isLoading, isError } = useQuery(["genres", type], getGenres);

    if (isLoading) return <Spinner />;
    if (isError) return <h1> {error.message} </h1>;
    const genres = data.genres;

    if (genres[0].name !== "All"){
        genres.unshift({ id: "0", name: "All" });
    }

    const handleChange = (e, type, value) => {
        e.preventDefault();
        onUserInput(type, value);
    };

    const handleTextChange = (e, props) => {
        handleChange(e, "name", e.target.value);
    };

    const handleGenreChange = (e) => {
        handleChange(e, "genre", e.target.value);
    };

    const text = (
        type === "movie" ? "Filter Movies" :
        type === "tv" ? "Filter TV Shows" :
        "Filter Actors"
    );

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Toolbar>
                    <Typography align="center" variant="h5" component="h2" >
                        <SearchIcon fontSize="large" />
                        {text}
                    </Typography>
                </Toolbar>
                <TextField
                    className={classes.formControl}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    value={titleFilter}
                    variant="filled"
                    onChange={handleTextChange}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="genre-label">Genre</InputLabel>
                    <Select
                        labelId="genre-label"
                        id="genre-select"
                        value={genreFilter}
                        onChange={handleGenreChange}
                    >
                        {genres.map((genre) => {
                            return (
                                <MenuItem key={genre.id} value={genre.id}>
                                    {genre.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </CardContent>
            <CardMedia
                className={classes.media}
                image={img}
                title="Filter"
            />
        </Card>
    );
}

export default TemplateFilterCard;