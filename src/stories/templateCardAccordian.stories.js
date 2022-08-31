import React from "react";
import TemplateCardAccordian from "../components/templates/templateCardAccordian";
import SampleMovie from "./sampleMovieData";
import { MemoryRouter } from "react-router-dom";
import CustomContextProvider from "../contexts/customContext";

export default {
    title: "Template/TemplateCardAccordian",
    component: TemplateCardAccordian,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
    ],
};

export const Basic = () => <TemplateCardAccordian obj={SampleMovie} type="movie" />;

Basic.storyName = "Default";