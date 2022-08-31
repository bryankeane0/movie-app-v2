import React from "react";
import TemplateHeaderList from "../components/templates/templateHeaderList";
import { MemoryRouter } from "react-router-dom";
import CustomContextProvider from "../contexts/customContext";

export default {
    title: "Template/TemplateHeaderList",
    component: TemplateHeaderList,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
    ],
};

export const Basic = () => <TemplateHeaderList title="Discover Movies" />;

Basic.storyName = "Default";
