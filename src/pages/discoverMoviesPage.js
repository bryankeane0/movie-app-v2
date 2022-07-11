import React, { useState } from "react";
import PageTemplate from "../components/movies/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {discover} from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination';

const DiscoverMoviesPage = (props) => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isError }  = useQuery(['discovermovies', "movie", page], discover)

    if (isLoading) return <Spinner />
    if (isError) return <h1>{error.message}</h1>

    const movies = data.results;
    const totalPages = data.total_pages;
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
        <>
            <PageTemplate
                title="Discover Movies"
                movies={movies}
                action={(movie) => {
                    return <AddToFavoritesIcon movie={movie} />
                }}
            />
            <Pagination hidePrevButton hideNextButton size="large" count={totalPages} page={page} onChange={(event, newPageNum) => setPage(newPageNum)} />
        </>
    );
};

export default DiscoverMoviesPage;