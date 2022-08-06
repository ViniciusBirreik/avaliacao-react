import { TextField, Grid, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../store/modules/registration/registrationSlice'

export default function Registration() {
    const name = useSelector(state => state.name)
    const password = useSelector(state => state.password)
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState(null)
    const repeatPassword = null
    const dispatch = useDispatch()

    console.log(name)
    function makeRegistration(event) {
        event.preventDefault()

        if(userName.length >= 4 && userPassword.length >= 6) {
            window.location.href = '/errands'
            dispatch(register({
                name, password
            }))
        }else{
            alert('Usuário ou senha inválidos, lembre-se: a senha deve ter pelo menos 6 caracters e o nome pelo menos 4')
        }
    }

    return(
        <Grid container spacing={2} justifyContent='center' alignItems='center' direction='column'>
            <Grid margin='30px'>
                <Typography variant='h3' component='h1' color='black'>Cadastro</Typography>
            </Grid>
                <Grid>
                    <form>
                        <div>
                            <TextField variant='outlined' size='small' label='name' margin='normal' onChange={(e) => setUserName(e.target.value)}></TextField>
                        </div>
                        <div>
                            <TextField variant='outlined' size='small' type='password' label='senha'margin='normal' onChange={(e) => setUserPassword(e.target.value)}></TextField>
                        </div>
                        <div>
                            <TextField variant='outlined' size='small' type='password' label='repetir senha' margin='normal' onChange={(repeatPassword) => (repeatPassword.target.value)}></TextField>
                        </div>
                    </form>
                    <Button variant='outlined' onClick={makeRegistration}>Cadastrar</Button>
                </Grid>
        </Grid>
    )
}