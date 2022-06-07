import React from "react";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import { withRouter } from "react-router-dom";

const MovieReviewPage = (props) => {
  const {movie, review} = props.location.state
  return (
    <PageTemplate movie={movie}>
      <MovieReview review={review} />
    </PageTemplate>
  );
};

export default withRouter(MovieReviewPage);