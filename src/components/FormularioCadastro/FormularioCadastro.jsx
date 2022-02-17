import React from 'react';
import Button from '@mui/material/Button';

function FormularioCadastro() {
    return(
        <form>
            <label>Nome</label>
            <input type="text"></input>

            <label>Sobrenome</label>
            <input type="text"></input>

            <label>CPF</label>
            <input type="text"></input>

            <label>Promoções</label>
            <input type="checkbox"></input>

            <label>Novidades</label>
            <input type="checkbox"></input>

            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;