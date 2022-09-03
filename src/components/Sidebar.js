import { Box, Container, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { NavLink, Outlet } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import { sideBarConfig } from '../utils/constants'
import './Sidebar'
import { useState } from 'react';

const Ten = styled(`span`)`
    
    font-size: 22px;
    font-family: Roboto;
    font-weight: bold;

`
const BarsIcon = styled('div')`
    display: flex;
    font-size: 22px;
`
const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{
                width: "350px", borderRightStyle: 'dashed', borderWidth: "1px",
                height: "100vh", borderColor: '#c1ccd8'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: "18px 5px",
                    marginBottom: "35px",
                    marginLeft: '5px'
                }} gap={4}>
                    <Ten sx={{ marginLeft: "4px" }}>Nha Khoa Đức Hạnh</Ten>
                    <BarsIcon>
                        <FaBars />
                    </BarsIcon>
                </Box>
                {/* {
                    sideBarConfig.map((item, i) => (
                        <NavLink to={item.path} key={i} className="link">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                } */}
                <List>
                    {sideBarConfig.map((item, index) => (
                        <NavLink to={item.path} key={index}>
                            <ListItem disablePadding
                                sx={{
                                    // selected and (selected + hover) states
                                    '&& .Mui-selected, && .Mui-selected:hover': {
                                        bgcolor: '#8fc9ff',
                                        '&, & .MuiListItemIcon-root': {
                                            color: 'black',
                                        },
                                    },
                                    // hover states
                                    //   '& .MuiListItemButton-root:hover': {
                                    //     bgcolor: 'orange',
                                    //     '&, & .MuiListItemIcon-root': {
                                    //       color: 'yellow',
                                    //     },
                                    //   },
                                }}>

                                <ListItemButton
                                    sx={{ paddingBottom: "20px", fontSize: "25px" }}
                                    selected={selectedIndex === index}
                                    onClick={() => handleListItemClick(index)}>
                                    <ListItemIcon sx={{
                                        color: "#000",

                                    }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </Box>
            <main style={{ width: "100%", marginTop: "20px" }}>
                <Outlet />
            </main>
        </Box >


    )
}

export default Sidebar