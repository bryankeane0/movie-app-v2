import React from "react";
import Actor from "../actorCard";
import Grid from "@material-ui/core/Grid";

const ActorList = ({ actors }) => {
    return actors.map((p) => (
        <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Actor key={p.id} actor={p}/>
        </Grid>
    ));
};

export default ActorList;