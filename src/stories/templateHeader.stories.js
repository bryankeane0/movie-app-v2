import React from "react";
import TemplateHeader from "../components/templates/templateHeader";
import SampleMovie from "./sampleMovieData";
import { MemoryRouter } from "react-router-dom";

export default {
    title: "Template/TemplateHeader",
    component: TemplateHeader,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    ],
};

export const Basic = () => <TemplateHeader obj={SampleMovie} type="movie" />;

Basic.storyName = "Default";
