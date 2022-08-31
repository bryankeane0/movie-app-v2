import React from "react";
import TemplateCard from "../components/templates/templateCard"
import SampleMovie from "./sampleMovieData";
import { MemoryRouter } from "react-router-dom";
import CustomContextProvider from "../contexts/customContext";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
    title: "Template/TemplateCard",
    component: TemplateCard,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <TemplateCard
            obj={SampleMovie}
            action={(movie) => <AddToFavoritesIcon obj={movie} />}
            taging={(movie) => null}
            type="movie"
        />
    );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
    return (
        <TemplateCard
            obj={sampleNoPoster}
            action={(movie) => <AddToFavoritesIcon obj={movie} />}
            taging={(movie) => null}
            type="movie"
        />
    );
};
Exceptional.storyName = "exception";
