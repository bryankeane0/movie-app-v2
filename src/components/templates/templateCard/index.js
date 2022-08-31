import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { CustomContext } from "../../../contexts/customContext";
import TemplateCardAccordian from "../templateCardAccordian";

const useStyles = makeStyles({
    card: {maxWidth: 345},
    media: {height: 500},
});


export default function TemplateCard({ obj, action, type }) {
    const classes = useStyles();
    const { favorites } = useContext(CustomContext);
    const isPerson = type === "person";

    if (!isPerson) {
        obj.favorite = !!favorites.find((id) => id === obj.id);
    }

    const imagePath = type === 'person' ?
        `https://image.tmdb.org/t/p/w500/${obj.profile_path}` :
        `https://image.tmdb.org/t/p/w500/${obj.poster_path}`

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={imagePath}
            />
            <TemplateCardAccordian obj={obj} action={action} type={type}/>
        </Card>
    );
}