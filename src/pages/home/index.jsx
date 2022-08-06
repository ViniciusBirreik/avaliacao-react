import { Link } from 'react-router-dom'
import { Button, Typography, Grid } from '@mui/material'

export default function Home() {
    return(
        <Grid container spacing={3} justifyContent='center' alignItems='center' direction='column' margin='30px'>
            <Typography variant='h3' component='h1'>Home Page</Typography>
            <Button variant='outlined'>
                <Link to='/login' style={{ textDecoration:'none', color:'#198ADE' }}>Fazer login</Link>
            </Button>
            <Button variant='outlined'>
                <Link to='/registration' style={{ textDecoration:'none', color:'#198ADE' }}>Cadastro</Link>
            </Button>
        </Grid>
    )
}