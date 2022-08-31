import React from "react";
import TemplateDetails from "../components/templates/templateDetails";
import SampleMovie from "./sampleMovieData";
import { MemoryRouter } from "react-router-dom";
import CustomContextProvider from "../contexts/customContext";

export default {
    title: "Template/TemplateDetails",
    component: TemplateDetails,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
    ],
};

export const Basic = () => <TemplateDetails obj={SampleMovie} type="movie" />;

Basic.storyName = "Default";