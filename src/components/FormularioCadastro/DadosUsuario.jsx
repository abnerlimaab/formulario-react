import { Button, TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const validacoes = useContext(ValidacoesCadastro);
    
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={
                e => {
                    e.preventDefault();
                    if(possoEnviar())
                        aoEnviar({email, senha});
                }
            }
        >
            <TextField
                value={email}
                onChange={
                    e => setEmail(e.target.value)
                }
                id='email'
                name='email'
                label='Email'
                type='email'
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField
                value={senha}
                onChange={
                    e => setSenha(e.target.value)
                }
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id='senha'
                name='senha'
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
            >Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;