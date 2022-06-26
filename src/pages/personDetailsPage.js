import React from "react";
import PersonDetails from "../components/people/personDetails";
import PageTemplate from "../components/people/templatePersonPage";
import { getPerson } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { withRouter } from "react-router-dom";

const PersonDetailsPage  = (props) => {
    const { id } = props.match.params
    const { data: person, error, isLoading, isError } = useQuery(["person", { id: id }], getPerson);

    if (isLoading) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;

    return (
        <>
            {person ? (
                <>
                    <PageTemplate person={person}>
                        <PersonDetails person={person} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for person details</p>
            )}
        </>
    );
};

export default withRouter(PersonDetailsPage);
