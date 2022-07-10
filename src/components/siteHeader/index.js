import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import { withRouter } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@mui/material/Button";
import Box from "@material-ui/core/Box";
import {IconButton} from "@mui/material";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: theme.spacing(1.5),
        margin: 0,
    },
    offset: theme.mixins.toolbar,
}));

const SiteHeader = ({history}) => {
    const classes = useStyles();
    const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);
    const [showsAnchorEl, setShowsAnchorEl] = useState(null);
    const [actorsAnchorEl, setActorsAnchorEl] = useState(null);
    const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
    const [moviesOpen, setMoviesOpen] = useState(false);
    const [showsOpen, setShowsOpen] = useState(false);
    const [actorsOpen, setActorsOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const handleClose = (type) => {
        if (type === "movies") {
            setMoviesOpen(false);
            setMoviesAnchorEl(null);
        } else if (type === "shows") {
            setShowsOpen(false);
            setShowsAnchorEl(null);
        } else if (type === "actors") {
            setActorsOpen(false);
            setActorsAnchorEl(null);
        } else if (type === "settings") {
            setSettingsOpen(false);
            setSettingsAnchorEl(null);
        }
    };

    const handleClick = (event) => {
        if (event.currentTarget.id === "movies") {
            setMoviesAnchorEl(event.currentTarget);
            setMoviesOpen(true);
        }
        else if (event.currentTarget.id === "shows") {
            setShowsAnchorEl(event.currentTarget);
            setShowsOpen(true);
        }
        else if (event.currentTarget.id === "actors") {
            setActorsAnchorEl(event.currentTarget);
            setActorsOpen(true);
        }
        else if (event.currentTarget.id === "settings") {
            setSettingsAnchorEl(event.currentTarget);
            setSettingsOpen(true);
        }
    };

    const handleOpen = (path, type) => {
        history.push(path)
        handleClose(type);
    }

    return (
        <>
            <AppBar position="fixed" component="nav">
                <Toolbar>
                    <CameraRollIcon className={classes.icon}/>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/movies/discover"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CINEMATIX
                    </Typography>
                    <>
                        <Button
                            id={"movies"}
                            sx={{ color: 'white', fontWeight: 'bold' }}
                            aria-controls={moviesOpen ? 'demo-positioned-menu' : undefined}
                            aria-expanded={moviesOpen ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {"Movies"}
                        </Button>
                        <Menu
                            id={"movies-menu"}
                            open={moviesOpen}
                            onClose={() => handleClose("movies")}
                            anchorEl={moviesAnchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={() => handleOpen("/movies/discover", "movies")}>{"Discover"}</MenuItem>
                            <MenuItem onClick={() => handleOpen("/movies/upcoming", "movies")}>{"Upcoming"}</MenuItem>
                        </Menu>
                        <Button
                            id={"shows"}
                            sx={{ color: 'white', fontWeight: 'bold' }}
                            aria-controls={showsOpen ? 'demo-positioned-menu' : undefined}
                            aria-expanded={showsOpen ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {"TV Shows"}
                        </Button>
                        <Menu
                            id={"shows-menu"}
                            open={showsOpen}
                            onClose={() => handleClose("shows")}
                            anchorEl={showsAnchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={() => handleOpen("/tv/discover", "shows")}>{"Discover"}</MenuItem>
                            <MenuItem onClick={() => handleOpen("/tv/toprated", "shows")}>{"Top Rated"}</MenuItem>
                        </Menu>
                        <Button
                            id={"actors"}
                            sx={{ color: 'white', fontWeight: 'bold' }}
                            aria-controls={actorsOpen ? 'demo-positioned-menu' : undefined}
                            aria-expanded={actorsOpen ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {"Actors"}
                        </Button>
                        <Menu
                            id={"actors-menu"}
                            open={actorsOpen}
                            onClose={() => handleClose("actors")}
                            anchorEl={actorsAnchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={() => handleOpen("/actors/popular", "actors")}>{"Popular"}</MenuItem>
                            <MenuItem onClick={() => handleOpen("/actors/latest", "actors")}>{"Latest"}</MenuItem>
                        </Menu>
                    </>
                    <Box sx={{ marginLeft: "auto" }}>
                        <IconButton id="settings" onClick={handleClick} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={settingsAnchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={settingsOpen}
                            onClose={() => handleClose("settings")}
                        >
                            <MenuItem onClick={() => handleOpen("/", "shows")}>{"Settings"}</MenuItem>
                            <MenuItem onClick={() => handleOpen("/", "shows")}>{"Log In"}</MenuItem>
                            <MenuItem onClick={() => handleOpen("/", "shows")}>{"Sign Up"}</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </>
    );
};

export default withRouter(SiteHeader);