import React from "react";
import TvShowList from "../../components/tvshows/tvShowList";
import SampleTvShow from "./sampleTvShowData";
import { MemoryRouter } from "react-router";
import AddToFavoritesIcon from "../../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import CustomContextProvider from "../../contexts/customContext";

export default {
  title: "TvShows/TvShowList",
  component: TvShowList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
  ],
};

export const Basic = () => {
  const tvshows = [
    { ...SampleTvShow, id: 1 },
    { ...SampleTvShow, id: 2 },
    { ...SampleTvShow, id: 3 },
    { ...SampleTvShow, id: 4 },
    { ...SampleTvShow, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TvShowList
        tvshows={tvshows}
        action={(tvshow) => <AddToFavoritesIcon tvshow={tvshow} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
