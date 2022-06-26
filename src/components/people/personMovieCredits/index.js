import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import img from '../../../images/film-poster-placeholder.png';
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import {ImageListItemBar} from "@material-ui/core";
import {useQuery} from "react-query";
import {getMovieCredits} from "../../../api/tmdb-api";

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

export default function PersonMovieCredits({ person }) {
    const { data } = useQuery(["person", { id: person.id }], getMovieCredits);
    const cast = data.cast
    return (
        <ImageList variant="masonry" cols={3} gap={8}>
            {cast.map((credit) => (
                <ImageListItem key={credit.id}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${credit.backdrop_path}`}
                        alt={credit.backdrop_path}
                    />
                    <ImageListItemBar position="below" title={credit.title} />
                </ImageListItem>
            ))}
        </ImageList>
    );
}