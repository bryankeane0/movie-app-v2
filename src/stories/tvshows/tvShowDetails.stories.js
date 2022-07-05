import React from "react";
import TvShowDetails from "../../components/tvshows/tvShowDetails";
import SampleTvShow from "./sampleTvShowData";
import { MemoryRouter } from "react-router";
import CustomContextProvider from "../../contexts/customContext";

export default {
  title: "TvShows/TvShowDetails",
  component: TvShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
  ],
};

export const Basic = () => <TvShowDetails tvshow={SampleTvShow} />;

Basic.storyName = "Default";
