import React from "react";
import ActorList from "../../components/actors/actorList";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import Grid from "@material-ui/core/Grid";

export default {
    title: "Actors/ActorList",
    component: SampleActor,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    ],
};

export const Basic = () => {
    const actor = [
        { ...SampleActor, id: 1 },
        { ...SampleActor, id: 2 },
        { ...SampleActor, id: 3 },
        { ...SampleActor, id: 4 },
        { ...SampleActor, id: 5 },
    ];
    return (
        <Grid container spacing={5}>
            <ActorList
                actors={Actor}
            />
        </Grid>
    );
};
Basic.storyName = "Default";
