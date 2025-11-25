import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Container,Button} from '@mui/material';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { NavLink } from 'react-router-dom';


const pages = [{title:"Home",path:"/"},{title: "Users",path:"/users"}];

function Header() {

  

    return (
        <AppBar position="static" color="error" >
            <Container maxWidth="xl" >
                <Toolbar disableGutters>

                    <LockTwoToneIcon     sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                    <Box sx={{ flexGrow: 1, display: "flex", gap : "15px" }}>
                        {pages.map((page) => (
                            <Button
                                variant='contained'
                                color='error'
                                component= {NavLink}
                                to = {page.path}
                                key={page.title}
                              
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
