import React from "react";
import PageTemplate from "../components/templates/templatePage";
import MovieReview from "../components/templates/templateReview";
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