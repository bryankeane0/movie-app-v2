import React from "react";
import TemplateList from "../components/templates/templateList";
import SampleMovie from "./sampleMovieData";
import { MemoryRouter } from "react-router-dom";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import CustomContextProvider from "../contexts/customContext";

export default {
    title: "Template/TemplateList",
    component: TemplateList,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
    ],
};

export const Basic = () => {
    const movies = [
        { ...SampleMovie, id: 1 },
        { ...SampleMovie, id: 2 },
        { ...SampleMovie, id: 3 },
        { ...SampleMovie, id: 4 },
        { ...SampleMovie, id: 5 },
    ];
    return (
        <Grid container spacing={5}>
            <TemplateList
                objects={movies}
                action={(movie) => <AddToFavoritesIcon obj={movie} />}
                type="movie"
            />
        </Grid>
    );
};
Basic.storyName = "Default";
