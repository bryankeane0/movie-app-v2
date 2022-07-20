import React, {useState} from "react";
import PageTemplate from '../components/movies/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch';
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import Pagination from "@mui/material/Pagination";

const UpcomingMoviesPage = (props) => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isError } = useQuery(['upcoming', page], getUpcomingMovies)

    if (isLoading) return <Spinner />
    if (isError) return <h1>{error.message}</h1>
    const movies = data.results;
    const totalPages = data.total_pages;

    const mustwatch = movies.filter(m => m.mustwatch)
    localStorage.setItem('mustwatch', JSON.stringify(mustwatch))

    return (
        <>
            <PageTemplate
                title="Upcoming Movies"
                movies={movies}
                action={(movie) => {
                    return <AddToMustWatchIcon movie={movie} />
                }}
            />
            <Pagination hidePrevButton hideNextButton size="large" count={totalPages} page={page} onChange={(event, newPageNum) => setPage(newPageNum)} />
        </>
    );
};
export default UpcomingMoviesPage;