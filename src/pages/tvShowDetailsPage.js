import React from "react";
import TvShowDetails from "../components/templates/templateDetails";
import PageTemplate from "../components/templates/templatePage";
import {getItem} from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { withRouter } from "react-router-dom";

const TvShowDetailsPage = (props) => {
    const { id } = props.match.params
    const { data: tvshow, error, isLoading, isError } = useQuery(["show", { id: id }, "tv"], getItem);
    if (isLoading) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;

    return (
        <>
            {tvshow ? (
                <>
                    <PageTemplate obj={tvshow} type="tv" >
                        <TvShowDetails obj={tvshow} type="tv" />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for show details</p>
            )}
        </>
    );
};

export default withRouter(TvShowDetailsPage);
