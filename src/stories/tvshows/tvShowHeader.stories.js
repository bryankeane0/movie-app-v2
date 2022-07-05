import React from "react";
import TvShowHeader from "../../components/tvshows/headerTvShows";
import SampleTvShow from "./sampleTvShowData";
import { MemoryRouter } from "react-router";

export default {
  title: "TvShows/TvShowHeader",
  component: TvShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvShowHeader tvshow={SampleTvShow} />;

Basic.storyName = "Default";
