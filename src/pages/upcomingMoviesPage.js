import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch';
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) return <Spinner />
  if (isError) return <h1>{error.message}</h1>
  const movies = data.results;

  const mustwatch = movies.filter(m => m.mustwatch)
  localStorage.setItem('mustwatch', JSON.stringify(mustwatch))

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
    />
);
};
export default UpcomingMoviesPage;