import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DiscoverMoviesPage from "./pages/discoverMoviesPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchPage from "./pages/mustWatchPage";
import PopularPeoplePage from "./pages/popularPeoplePage";
import PersonDetailsPage from "./pages/personDetailsPage";
import discoverTvShowsPage from "./pages/discoverTvShowsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
              <Route exact path="/person/popular" component={PopularPeoplePage} />
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage}/>
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/mustwatch" component={MustWatchPage} />
              <Route exact path="/tv/discover" component={discoverTvShowsPage} />
              <Route path="/person/:id" component={PersonDetailsPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/" component={DiscoverMoviesPage} />
              <Redirect from="*" to="/"/>
            </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root")); 