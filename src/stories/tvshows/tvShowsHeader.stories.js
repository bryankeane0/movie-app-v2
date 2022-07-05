import React from "react";
import TvShowHeader from "../../components/tvshows/headerTvShows";
import { MemoryRouter } from "react-router";
import CustomContextProvider from "../../contexts/customContext";

export default {
  title: "TvShows/TvShowHeader",
  component: TvShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
  ],
};

export const Basic = () => <TvShowHeader title="Discover TV Shows" />;

Basic.storyName = "Default";
