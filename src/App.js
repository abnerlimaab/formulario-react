import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
    <Typography 
      variant="h3" 
      component="h1" 
      align='center'
      sx={{
        marginTop: 5
      }}
      >Formulário de cadastro</Typography>
    <FormularioCadastro 
      aoEnviar={aoEnviarFormulario}
      validarCPF={validarCPF}
    />
    </Container>
  );
}

function aoEnviarFormulario(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11)
    return {valido: false, texto: "O cpf deve ter 11 digitos"}
  return {valido: true, texto: ""}
}

export default App;
