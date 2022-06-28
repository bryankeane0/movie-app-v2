import React from "react";
import PersonHeader from "../../components/people/headerPerson";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";

export default {
    title: "Person/PersonHeader",
    component: PersonHeader,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    ],
};

export const Basic = () => <PersonHeader person={SamplePerson} />;

Basic.storyName = "Default";
