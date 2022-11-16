import {AiFillContacts, AiFillFolder, AiFillHome, } from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Intro',
        path: '/',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <AiFillFolder/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiFillContacts/>,
        cName: 'nav-text'
    }
]