import React from "react";
import PageTemplate from "../components/people/templatePersonListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPeople } from '../api/tmdb-api';

const PopularPeoplePage = (props) => {
    const { data, error, isLoading, isError }  = useQuery('people', getPeople)

    if (isLoading) return <Spinner />
    if (isError) return <h1>{error.message}</h1>
    const people = data.results;

    return (
        <PageTemplate
            title="Popular People"
            people={people}
        />
    );
};

export default PopularPeoplePage;