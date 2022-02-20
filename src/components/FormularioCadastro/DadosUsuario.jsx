import { Button, TextField } from '@mui/material';
import React from 'react';

function DadosUsuario({aoEnviar}) {
    return (
        <form
            onSubmit={
                e => {
                    e.preventDefault();
                    aoEnviar();
                }
            }
        >
            <TextField
                id='email'
                label='Email'
                type='email'
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField
                id='senha'
                label='Senha'
                type='password'
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <Button
                type='submit' 
                variant='contained' 
                color='primary'
            >Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario;