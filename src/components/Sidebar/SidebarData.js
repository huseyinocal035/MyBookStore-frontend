import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Books",
        icon: <MenuBookSharpIcon />,
        link: "/books"
    },
    {
        title: "Friends",
        icon: <PeopleSharpIcon />,
        link: "/friends"
    },
    {
        title: "Logout",
        icon: <ExitToAppSharpIcon />,
        link: "/logout"
    },
]