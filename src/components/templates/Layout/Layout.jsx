
import { Container } from '@mui/material'
import Header from '../../organizm/Header/Header'
import { Outlet } from 'react-router-dom'


export const Layout = () => {
    return (
        <>
            <Header />
            <Container maxWidth='xl'>
                <Outlet />

            </Container>


        </>
    )
}
