import { StepLabel, Stepper, Step, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState([]);
    useEffect(
        () => {
            if (etapaAtual === formulario.length - 1)
                aoEnviar(dadosColetados);
        }
    );

    const formulario = [
        <DadosUsuario
            aoEnviar={coletarDados}
        />,
        <DadosPessoais
            validarCPF={validarCPF}
            aoEnviar={coletarDados}
        />,
        <DadosEntrega
            aoEnviar={coletarDados}
        />,
        <Typography variant='h5' component="div">
            <Box sx={{ textAlign: 'center', m: 4 }}>Obrigado pelo cadastro!</Box>
        </Typography>
    ];

    function coletarDados(dados) {
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper 
                activeStep={etapaAtual}
                sx={{
                    marginTop: 5,
                    marginBottom: 2
                }}
            >
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formulario[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;