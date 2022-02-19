import { Button, TextField } from '@mui/material';
import React from 'react';

function DadosUsuario() {
    return (
        <form>
            <TextField
                id='email'
                label='email'
                type='email'
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField
                id='senha'
                label='senha'
                type='password'
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