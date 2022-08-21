import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import {IconButton} from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import React, {useContext} from "react";
import {CustomContext} from "../../../contexts/customContext";
import {makeStyles} from "@material-ui/core/styles";
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    card: {
        maxWidth: 345
    },
    media: {
        height: 500
    },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
});

export default function TvShowCardAccordian({ tvshow, action }) {
    const _ = require('lodash');
    const classes = useStyles();
    const gutterStyles = usePushingGutterStyles({firstExcluded: true});
    const {favorites} = useContext(CustomContext);
    tvshow.favorite = !!favorites.find((id) => id === tvshow.id);

    return (
        <Accordion
            anchor={"top"}
            container={document.getElementById("root")}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h6" component="h1">
                    {_.truncate(tvshow.name, {'length': 28,})}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    mb={1}
                    className={gutterStyles.parent}
                >
                    <Rating name={'rating'} value={tvshow.vote_average / 2} size={'small'} readOnly />
                    <Typography variant={'body2'} className={classes.rateValue}>
                        {tvshow.vote_average / 2}
                    </Typography>
                </Box>
                <Typography color={'textSecondary'} variant={'body2'}>
                    {_.truncate(tvshow.overview, {'length': 115})}
                </Typography>
                <Box
                    mt={2}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Box display={'flex'} alignItems={'center'} className={gutterStyles.parent}>
                        <Link to={`/tv/${tvshow.id}`}>
                            <IconButton>
                                <ReadMoreIcon/>
                            </IconButton>
                        </Link>

                    </Box>
                    <IconButton>
                        <Favorite/>
                    </IconButton>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
}