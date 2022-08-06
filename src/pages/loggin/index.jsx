import { Grid, Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../store/modules/registration/registrationSlice'

export default function Loggin() {
    const logginName = useSelector(state => state.name)
    const logginPassword = useSelector(state => state.password)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    
    console.log(logginName)

    function onLoggin(event) {
        event.preventDefault()
            
        if(logginName === name && logginPassword === password) {
            window.location.href = '/errands'
        }else{
            alert('Usuário ou senha incorreto.')
            window.location.href = '/'
        }
    }
    return(
        <Grid container spacing={2} justifyContent='center' alignItems='center' direction='column'>
            <Grid margin='30px'>
                <Typography variant='h3' component='h1' color='black'>Loggin</Typography>
            </Grid>
                <Grid>
                    <form>
                        <div>
                            <TextField variant='outlined' size='small' label='name' margin='normal' onChange={(e) => setName(e.target.value)}></TextField>
                        </div>
                        <div>
                            <TextField variant='outlined' size='small' type='password' label='senha' margin='normal' onChange={(e) => setPassword(e.target.value)}></TextField>
                        </div>
                    </form>
                    <Button variant='outlined' type='submit' onClick={onLoggin}>Loggin</Button>
                </Grid>
        </Grid>
    )
}