import React from "react";
import PersonList from "../../components/people/personList";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import Grid from "@material-ui/core/Grid";

export default {
    title: "People/PersonList",
    component: SamplePerson,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    ],
};

export const Basic = () => {
    const person = [
        { ...SamplePerson, id: 1 },
        { ...SamplePerson, id: 2 },
        { ...SamplePerson, id: 3 },
        { ...SamplePerson, id: 4 },
        { ...SamplePerson, id: 5 },
    ];
    return (
        <Grid container spacing={5}>
            <PersonList
                people={person}
            />
        </Grid>
    );
};
Basic.storyName = "Default";
