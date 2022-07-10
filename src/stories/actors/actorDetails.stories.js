import React from "react";
import ActorDetails from "../../components/actors/actorDetails";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";

export default {
    title: "Actors/ActorDetails",
    component: ActorDetails,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    ],
};

export const Basic = () => <ActorDetails actor={SampleActor} />;

Basic.storyName = "Default";
