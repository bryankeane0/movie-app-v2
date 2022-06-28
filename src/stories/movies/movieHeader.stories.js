import React from "react";
import MovieHeader from "../../components/movies/headerMovie";
import SampleMovie from "./sampleMovieData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Movies/MovieHeader",
  component: MovieHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MovieHeader movie={SampleMovie} />;

Basic.storyName = "Default";
