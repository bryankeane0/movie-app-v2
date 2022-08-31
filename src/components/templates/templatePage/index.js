import React from "react";
import TemplateHeader from "../templateHeader";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getImages } from "../../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../../spinner';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    imageList: {
        width: 450,
        height: '100vh',
    },
}));

const TemplatePage = ({ obj, children, type }) => {
    const classes = useStyles();
    const { data , error, isLoading, isError } = useQuery(["images", { id: obj.id }, type], getImages);

    if (isLoading) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;
    let images;
    type === "person" ? images = data.profiles : images= data.posters

    return (
        <>
            <TemplateHeader obj={obj} type={type} />
            <Grid item xs={9}>
                {children}
            </Grid>
        </>
    );
};

export default TemplatePage;