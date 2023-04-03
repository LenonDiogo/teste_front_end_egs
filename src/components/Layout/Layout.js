// pages/index.js
import React from "react";
import styled from "styled-components";
import {
  Container,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../../assets/Logo.png";
import { useRouter } from "next/router";

const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const BackgroundContainer = styled.div`
  width: 50%;
  background: linear-gradient(
    90deg,
    rgba(76, 230, 188, 1) 0%,
    rgba(70, 206, 239, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled(Container)`
  background: #32425b;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const FormTitle = styled.h2`
  color: #46d5b9;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Jost";
`;
const FormRowTitle = styled(Typography)`
  color: #fff;
  padding-left: 1rem;
  padding-bottom: 1px;
  margin-bottom: 0;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  background: #46d5b9;
  &:hover {
    background-color:#46d5b9;
  }
`;

export default function Home() {
  const { push } = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault();
    push({
      pathname: "/Cadaster",
      query: {
        nome: event?.target[0]?.value,
        sobrenome: event?.target[1]?.value,
        dataNascimento: event?.target[2]?.value,
        email: event?.target[3]?.value,
        CPF: event?.target[4]?.value,
      },
    });  
  };
  return (
    <>
      <MainContainer>
        <BackgroundContainer>
          <Image src={Logo} alt="Logo" width={400} height={400} />
        </BackgroundContainer>
        <FormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <FormTitle>ERP SISTEMAS</FormTitle>

            <FormRowTitle>NOME</FormRowTitle>
            <TextField
              label="Escreva seu nome"
              variant="standard"
              margin="normal"
              required
              InputLabelProps={{
                style: {
                  color: "lightgrey",
                  fontStyle: "italic",
                  paddingLeft: "1rem",
                },
              }}
            />
            <FormRowTitle>SOBRENOME</FormRowTitle>
            <TextField
              color="warning"
              label="Escreva seu sobrenome"
              variant="standard"
              margin="normal"
              fullWidth
              required
              InputLabelProps={{
                style: {
                  color: "lightgrey",
                  fontStyle: "italic",
                  paddingLeft: "1rem",
                },
              }}
            />
            <FormRowTitle>IDADE</FormRowTitle>
            <TextField
              variant="standard"
              margin="normal"
              type="date"
              fullWidth
              required
              InputLabelProps={{
                style: {
                  color: "lightgrey",
                  fontStyle: "italic",
                  paddingLeft: "1rem",
                },
              }}
            />
            <FormRowTitle>E-MAIl</FormRowTitle>
            <TextField
              label="Escreva seu e-mail"
              variant="standard"
              margin="normal"
              type="email"
              fullWidth
              required
              InputLabelProps={{
                style: {
                  color: "lightgrey",
                  fontStyle: "italic",
                  paddingLeft: "1rem",
                },
              }}
            />
            <FormRowTitle>CPF</FormRowTitle>
            <TextField
              label="Escreva seu CPF"
              variant="standard"
              margin="normal"
              type="number"
              fullWidth
              required
              InputLabelProps={{
                style: {
                  color: "lightgrey",
                  fontStyle: "italic",
                  paddingLeft: "1rem",
                },
              }}
            />

            <StyledButton variant="contained" fullWidth type="submit">
              Cadastrar
            </StyledButton>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox required/>}
                label="Aceito os termos e condiçõess"
                required
              />
            </FormGroup>
            <FormTitle>Já sou membro</FormTitle>
          </StyledForm>
        </FormContainer>
      </MainContainer>
    </>
  );
}
