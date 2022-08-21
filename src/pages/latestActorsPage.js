import React, {useState} from "react";
import PageTemplate from "../components/actors/templateActorListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getItems } from '../api/tmdb-api';
import Pagination from "@mui/material/Pagination";

const LatestActorsPage = (props) => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isError }  = useQuery(['latestactors', "person", "latest", page], getItems)

    if (isLoading) return <Spinner />
    if (isError) return <h1>{error.message}</h1>
    const actors = data.results;
    const totalPages = data.total_pages;

    return (
        <>
            <PageTemplate
                title="Latest Actors"
                actors={actors}
            />
            <Pagination hidePrevButton hideNextButton size="large" count={totalPages} page={page} onChange={(event, newPageNum) => setPage(newPageNum)} />
        </>
    );
};

export default LatestActorsPage;