import React from "react";
import ActorHeader from "../../components/actors/headerActor";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";

export default {
    title: "Actors/ActorHeader",
    component: ActorHeader,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    ],
};

export const Basic = () => <ActorHeader actor={SampleActor} />;

Basic.storyName = "Default";
