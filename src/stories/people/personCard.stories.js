import React from "react";
import ActorCard from "../../components/actors/actorCard";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import CustomContextProvider from "../../contexts/customContext";

export default {
    title: "Actors/ActorCard",
    component: ActorCard,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <ActorCard
            actor={SampleActor}
            taging={(actor) => null}
        />
    );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleActor, profile_path: undefined };
    return (
        <ActorCard
            movie={sampleNoPoster}
            taging={(movie) => null}
        />
    );
};
Exceptional.storyName = "exception";
