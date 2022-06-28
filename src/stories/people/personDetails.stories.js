import React from "react";
import PersonDetails from "../../components/people/personDetails";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";

export default {
    title: "People/PersonDetails",
    component: PersonDetails,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    ],
};

export const Basic = () => <PersonDetails person={SamplePerson} />;

Basic.storyName = "Default";
