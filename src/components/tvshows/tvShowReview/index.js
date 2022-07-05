import React from "react";

const TvShowReview =  ({ review }) => {
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </>
  );
};
export default TvShowReview