import React from "react";
import TvShowCard from "../../components/tvshows/tvShowCard";
import SampleTvShow from "./sampleTvShowData";
import { MemoryRouter } from "react-router";
import CustomContextProvider from "../../contexts/customContext";
import AddToFavoritesIcon from "../../components/cardIcons/addToFavorites";

export default {
  title: "TvShows/TvShowCard",
  component: TvShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvShowCard
      tvshow={SampleTvShow}
      action={(tvshow) => <AddToFavoritesIcon tvshow={tvshow} />}
      taging={(tvshow) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
  return (
    <TvShowCard
      movie={sampleNoPoster}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
