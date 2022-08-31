import React from "react";
import TemplateCard from "../templateCard";
import Grid from "@material-ui/core/Grid";

const TemplateList = ({ objects, action, type }) => {
    return objects.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TemplateCard key={m.id} obj={m} action={action} type={type} />
        </Grid>
    ));
};

export default TemplateList;