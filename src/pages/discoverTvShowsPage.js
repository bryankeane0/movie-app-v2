import React, {useState} from "react";
import PageTemplate from "../components/tvshows/templateTvShowListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTvShows} from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Pagination from '@mui/material/Pagination';

const DiscoverTvShowsPage = (props) => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isError }  = useQuery(['discovertv', page], getTvShows)

    if (isLoading) return <Spinner />
    if (isError) return <h1>{error.message}</h1>

    const tvshows = data.results;
    const totalPages = data.total_pages;
    const favorites = tvshows.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
        <>
            <PageTemplate
                title="Discover TV Shows"
                tvshows={tvshows}
                action={(tvshow) => {
                    return <AddToFavoritesIcon tvshow={tvshow} />
                }}
            />
            <Pagination hidePrevButton hideNextButton size="large" count={totalPages} page={page} onChange={(event, newPageNum) => setPage(newPageNum)} />
        </>
    );
};

export default DiscoverTvShowsPage;