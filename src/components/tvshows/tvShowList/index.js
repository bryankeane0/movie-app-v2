import React from "react";
import TvShow from "../tvShowCard";
import Grid from "@material-ui/core/Grid";

const TvShowList = ({ tvshows, action }) => {
    return tvshows.map((m) => (
      <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TvShow key={m.id} tvshow={m} action={action}/>
      </Grid>
  ));
};

export default TvShowList;