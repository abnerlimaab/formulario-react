import React, {useState, useContext} from 'react';
import { Switch, Button, TextField, FormControlLabel } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {
        const [nome, setNome] = useState("");
        const [sobrenome, setSobrenome] = useState("");
        const [cpf, setCPF] = useState("");
        const [promocoes, setPromocoes] = useState(true);
        const [novidades, setNovidades] = useState(true);

    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form
            onSubmit={e => {
                e.preventDefault();
                if(possoEnviar())
                    aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            }}
        >
            <TextField 
                value={nome}
                onChange={
                    e => setNome(e.target.value)
                }
                id="nome" 
                name="nome" 
                label="Nome" 
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField 
                value={sobrenome}
                onChange={
                    e => setSobrenome(e.target.value)
                }
                id="sobrenome" 
                name="sobrenome" 
                label="Sobrenome" 
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField 
                value={cpf}
                onChange={
                    e => setCPF(e.target.value)
                }
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF" 
                name="cpf"
                label="CPF" 
                required
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <FormControlLabel 
                control={
                    <Switch 
                        checked={promocoes}
                        onChange={
                            e => setPromocoes(e.target.checked)
                        }
                        name="promocoes" 
                    />
                }
                label="Promoções"
            />
            <FormControlLabel 
                control={
                    <Switch 
                        checked={novidades}
                        onChange={
                            e => setNovidades(e.target.checked)
                        }
                        name="novidades" 
                    />
                }
                label="Novidades"
            />
            <Button 
                type='submit' 
                variant='contained' 
                color='primary'
            >Próximo</Button>
        </form>
    )
}

export default DadosPessoais;