import React, { useState } from "react";
import Header from "../templateHeaderList";
import FilterCard from "../templateFilterCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TemplateList from "../templateList";

const useStyles = makeStyles({
    root: {
        padding: "20px",
    },
});

function TemplateListPage({ objects, title, action, type }) {
    const classes = useStyles();
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genreId = Number(genreFilter);

    let displayedGenredObjects = objects
        .filter((m) => {
            return m.title !== -1;
        })
        .filter((m) => {
            return genreId > 0 ? m.genre_ids.includes(genreId) : true;
        });

    let displayedObjects = objects
        .filter((m) => {
            return m.title !== -1;
        });

    const isPerson = type === "person";

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
    };

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Header objects={objects} title={title} type={type} />
            </Grid>
            {
                isPerson ?
                    <Grid item container spacing={5}>
                        <TemplateList objects={displayedObjects}/>
                    </Grid> :
                <Grid item container spacing={5}>
                    <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <FilterCard
                            onUserInput={handleChange}
                            titleFilter={nameFilter}
                            genreFilter={genreFilter}
                            type={type}
                        />
                    </Grid>
                    <TemplateList action={action} objects={displayedGenredObjects}/>
                </Grid>
            }
        </Grid>
    );
}
export default TemplateListPage;