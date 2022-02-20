import { Button, TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({senha: {valido: true, texto: ""}});

    const validacoes = useContext(ValidacoesCadastro);

    function validarCampos(e) {
        const { name, value } = e.target;
        const novoEstado = {...erros, [name]: validacoes[name](value)};
        setErros(novoEstado);
    }

    function possoEnviar() {
        for(let campo in erros){
            if(!erros[campo].valido) return false;
        }
        return true;
    }

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