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
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchPage from "./pages/mustWatchPage";
import PopularActorsPage from "./pages/popularActorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import DiscoverTvShowsPage from "./pages/discoverTvShowsPage";
import TvShowDetailsPage from "./pages/tvShowDetailsPage";
import CustomContextProvider from "./contexts/customContext";
import TopRatedTvShowsPage from "./pages/topRatedTvShowsPage";

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
             <CustomContextProvider>
                {" "}
                <Switch>
                    <Route exact path="/actors/popular" component={PopularActorsPage} />
                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                    <Route exact path="/movies/upcoming" component={UpcomingMoviesPage}/>
                    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <Route exact path="/movies/mustwatch" component={MustWatchPage} />
                    <Route exact path="/tv/discover" component={DiscoverTvShowsPage} />
                    <Route exact path="/tv/toprated" component={TopRatedTvShowsPage} />
                    <Route exact path="/movies/discover" component={DiscoverMoviesPage} />
                    <Route path="/actor/:id" component={ActorDetailsPage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    <Route path="/tv/:id" component={TvShowDetailsPage} />
                    <Redirect from="*" to="/movies/discover"/>
                </Switch>
              </CustomContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

ReactDOM.render(<App />, document.getElementById("root")); 