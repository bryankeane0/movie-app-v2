import React from "react";
import MovieDetails from "../../components/movies/movieDetails";
import SampleMovie from "./sampleMovieData";
import { MemoryRouter } from "react-router";
import CustomContextProvider from "../../contexts/customContext";

export default {
  title: "Movies/MovieDetails",
  component: MovieDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
  ],
};

export const Basic = () => <MovieDetails movie={SampleMovie} />;

Basic.storyName = "Default";
