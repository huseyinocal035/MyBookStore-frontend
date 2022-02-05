import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
        textAlign: "left"
    },
    root: {
        flexGrow: 1
    },
    link: {
        textDecoration: "none",
        boxShadow: "none",
        color: "white"
    }
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to={"/"}>Home</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to={"/"}>Book Store</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
