import React from 'react';
import { Switch, Button, TextField, FormControlLabel } from '@mui/material';

function FormularioCadastro() {
    return(
        <form>
            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin='normal'/>

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin='normal'/>

            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin='normal'/>

            <FormControlLabel 
                control={<Switch name="promocoes" defaultChecked/>}
                label="Promoções"
            />

            <FormControlLabel 
                control={<Switch name="novidades" defaultChecked/>}
                label="Novidades"
            />

            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;