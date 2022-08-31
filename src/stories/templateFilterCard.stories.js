import React from "react";
import TemplateFilterCard from "../components/templates/templateFilterCard";
import { MemoryRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false,
        },
    },
});

export default {
    title: "Template/TemplateFilterCard",
    component: TemplateFilterCard,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => (
            <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
        ),
    ],
};

export const Basic = () => {
    return <TemplateFilterCard onUserInput={action("filter input")} type="movie" />;
};
Basic.storyName = "Default";
