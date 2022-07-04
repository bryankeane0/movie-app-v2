import React, { useContext } from "react";
import { CustomContext } from "../../contexts/customContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToMustWatchIcon = ({ movie }) => {
    const context = useContext(CustomContext);

    const handleAddToMustWatch = (e) => {
        e.preventDefault();
        context.addToMustWatch(movie);
    }

    return (
        <IconButton aria-label="add to must watch" onClick={handleAddToMustWatch}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToMustWatchIcon; 