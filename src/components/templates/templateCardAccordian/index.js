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
import { styled } from '@mui/material/styles';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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

export default function TemplateCardAccordian({ obj, action, type }) {
    const lodash = require('lodash');
    const classes = useStyles();
    const gutterStyles = usePushingGutterStyles({firstExcluded: true});
    const {favorites} = useContext(CustomContext);
    const isPerson = type === "person", isMovie = type === "movie";
    if (!isPerson) {
        obj.favorite = !!favorites.find((id) => id === obj.id);
    }

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    const labels = {
        0.5: 'Hated+',
        1: 'Hated',
        1.5: 'Disliked+',
        2: 'Disliked',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Liked',
        4: 'Liked+',
        4.5: 'Loved',
        5: 'Loved+',
    };

    function getLabelText(value) {
        return `${value} ${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const getVoteAverage = (type) => {
        return type / 2
    }

    const getDetailsLink = (type) => {
        if(type === "person") {
            return `/actor/${obj.id}`
        } else if(type === "tv") {
            return `/tv/${obj.id}`
        } else {
            return `/movies/${obj.id}`
        }
    }

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
                    {
                        isMovie ?
                            obj.title :
                            obj.name
                    }
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    mb={1}
                    className={gutterStyles.parent}
                >
                    {
                        isPerson ?
                            <StyledRating
                                name="rating"
                                defaultValue={3}
                                value={obj.popularity / 100}
                                getLabelText={getLabelText}
                                //getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                readOnly
                            /> :
                            <Rating name={'read-only'} value={obj.vote_average / 2} size={'small'} precision={0.5} readOnly />
                    }
                    <Typography variant={'body2'} className={classes.rateValue}>
                        {
                            isPerson ?
                                obj.popularity / 100 :
                                getVoteAverage(obj.vote_average)
                        }
                    </Typography>
                </Box>
                <Typography color={'textSecondary'} variant={'body2'}>
                    {
                        isPerson ?
                            "" :
                            lodash.truncate(obj.overview, {'length': 115})
                    }
                </Typography>
                <Box
                    mt={2}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Box display={'flex'} alignItems={'center'} className={gutterStyles.parent}>
                        <Link to={getDetailsLink(type)}>
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