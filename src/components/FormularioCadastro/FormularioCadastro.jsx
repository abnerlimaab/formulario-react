import React, {useState} from 'react';
import { Switch, Button, TextField, FormControlLabel } from '@mui/material';

function FormularioCadastro({aoEnviar, validarCPF}) {
        const [nome, setNome] = useState("");
        const [sobrenome, setSobrenome] = useState("");
        const [cpf, setCPF] = useState("");
        const [promocoes, setPromocoes] = useState(true);
        const [novidades, setNovidades] = useState(true);
        const [erros, setErros] = useState({cpf: {valido: true, texto: ""}});
    return(
        <form
            onSubmit={e => {
                e.preventDefault();
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            }}
        >
            <TextField 
                value={nome}
                onChange={
                    e => setNome(e.target.value)
                }
                id="nome" 
                label="Nome" 
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
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <TextField 
                value={cpf}
                onChange={
                    e => setCPF(e.target.value)
                }
                onBlur={
                    e => {
                        const ehValido = validarCPF(cpf);
                        setErros({cpf: ehValido});
                    }
                }
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF" 
                label="CPF" 
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
            >Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;