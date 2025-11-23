import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Container,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';


const pages = [{title:"Home",path:"/"},{title: "Users",path:"/users"}];

function Header() {

  

    return (
        <AppBar position="static" color="error" sx={{mb:"30px"}}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
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
                        LOGO
                    </Typography>

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
