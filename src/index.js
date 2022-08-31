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
import LatestActorsPage from "./pages/latestActorsPage";
import LoginPage from "./pages/loginPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./routes/privateRoute";
import SignUpPage from "./pages/signUpPage";

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
                <AuthProvider>
                <SiteHeader />
                 <CustomContextProvider>
                    {" "}
                    <Switch>
                        <Route path="/signup" component={SignUpPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route exact path="/actors/popular" component={PopularActorsPage} />
                        <Route exact path="/actors/latest" component={LatestActorsPage} />
                        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage}/>
                        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                        <PrivateRoute exact path="/movies/mustwatch" component={MustWatchPage} />
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
                </AuthProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

ReactDOM.render(<App />, document.getElementById("root")); 