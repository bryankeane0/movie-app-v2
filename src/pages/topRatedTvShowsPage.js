import React, {useState} from "react";
import PageTemplate from "../components/templates/templateListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getItems} from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination';

const TopRatedTvShowsPage = (props) => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isError }  = useQuery(['topratedtv', "tv", "top_rated", page], getItems)

    if (isLoading) return <Spinner />
    if (isError) return <h1>{error.message}</h1>

    const tvshows = data.results;
    const totalPages = data.total_pages;
    const favorites = tvshows.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
        <>
            <PageTemplate
                title="Top Rated TV Shows"
                objects={tvshows}
                action={(tvshow) => {
                    return <AddToFavoritesIcon obj={tvshow} />
                }}
                type="tv"
            />
            <Pagination hidePrevButton hideNextButton size="large" count={totalPages} page={page} onChange={(event, newPageNum) => setPage(newPageNum)} />
        </>
    );
};

export default TopRatedTvShowsPage;