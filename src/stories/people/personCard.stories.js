import React from "react";
import PersonCard from "../../components/people/personCard";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../../contexts/moviesContext";

export default {
    title: "People/PersonCard",
    component: PersonCard,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <PersonCard
            person={SamplePerson}
            taging={(person) => null}
        />
    );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SamplePerson, profile_path: undefined };
    return (
        <PersonCard
            movie={sampleNoPoster}
            taging={(movie) => null}
        />
    );
};
Exceptional.storyName = "exception";
