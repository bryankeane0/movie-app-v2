import React, {useState} from "react";
import PageTemplate from "../components/templates/templateListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getItems } from '../api/tmdb-api';
import Pagination from "@mui/material/Pagination";

const PopularActorsPage = (props) => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isError }  = useQuery(['popularactors', "person", "popular", page], getItems)

    if (isLoading) return <Spinner />
    if (isError) return <h1>{error.message}</h1>
    const actors = data.results;
    const totalPages = data.total_pages;

    return (
        <>
            <PageTemplate
                title="Popular Actors"
                objects={actors}
                type="person"
            />
            <Pagination hidePrevButton hideNextButton size="large" count={totalPages} page={page} onChange={(event, newPageNum) => setPage(newPageNum)} />
        </>
    );
};

export default PopularActorsPage;