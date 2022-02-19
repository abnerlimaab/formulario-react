import React, {useState} from 'react';
import { Switch, Button, TextField, FormControlLabel } from '@mui/material';

function FormularioCadastro() {
        const [nome, setNome] = useState("");
        const [sobrenome, setSobrenome] = useState("");
        const [cpf, setCPF] = useState("");
    return(
        <form
            onSubmit={e => {
                e.preventDefault();
                console.log(nome);
                console.log(sobrenome);
                console.log(cpf);
            }}
        >
            <TextField 
                value={nome}
                onChange={
                    e => {
                        let tempNome = e.target.value;
                        if (tempNome.length >= 3)
                            tempNome = tempNome.substring(0, 3);
                        setNome(tempNome);
                    }
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
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin='normal'
            />
            <FormControlLabel 
                control={<Switch name="promocoes" defaultChecked/>}
                label="Promoções"
            />
            <FormControlLabel 
                control={<Switch name="novidades" defaultChecked/>}
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