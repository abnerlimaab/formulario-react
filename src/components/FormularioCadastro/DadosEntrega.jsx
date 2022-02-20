import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

function DadosEntrega({aoEnviar}) {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return(
        <form
            onSubmit={
                e => {
                    e.preventDefault();
                    aoEnviar({cep, endereco, numero, estado, cidade});
                }
            }
        >
            <TextField
                value={cep}
                onChange={
                    e => setCep(e.target.value)
                }
                id='cep'
                label='CEP'
                type='number'
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField
                value={endereco}
                onChange={
                    e => setEndereco(e.target.value)
                }
                id='endereco'
                label='Endereço'
                type='text'
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField
                value={numero}
                onChange={
                    e => setNumero(e.target.value)
                }
                id='numero'
                label='Número'
                required
                type='number'
                variant="outlined" 
                margin='normal'
            />
            <TextField
                value={estado}
                onChange={
                    e => setEstado(e.target.value)
                }
                id='estado'
                label='Estado'
                type='text'
                required
                variant="outlined" 
                margin='normal'
            />
            <TextField
                value={cidade}
                onChange={
                    e => setCidade(e.target.value)
                }
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