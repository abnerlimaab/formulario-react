import { TextField, Button } from '@mui/material';
import React from 'react';

function DadosEntrega() {
    return(
        <form>
            <TextField
                id='cep'
                label='CEP'
                type='number'
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField
                id='endereco'
                label='Endereço'
                type='text'
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField
                id='numero'
                label='Número'
                required
                type='number'
                variant="outlined" 
                margin='normal'
            />
            <TextField
                id='estado'
                label='Estado'
                type='text'
                required
                variant="outlined" 
                margin='normal'
            />
            <TextField
                id='cidade'
                label='Cidade'
                type='text'
                required
                variant="outlined" 
                margin='normal'
            />
            <Button
                type='submit' 
                required
                variant='contained' 
                color='primary'
                fullWidth
            >Cadastrar
            </Button>
        </form>
    )
}

export default DadosEntrega;