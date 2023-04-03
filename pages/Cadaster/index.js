import NavBar from "@/src/components/NavBar";
import { useRouter } from "next/router";
import React from "react";
import TableCadaster from "./Table";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const index = () => {
  const router = useRouter();
  const { nome, sobrenome, dataNascimento, email, CPF } = router.query;

  return (
    <>
      <NavBar nome={nome} sobrenome={sobrenome} />
        <TableCadaster
          nome={nome}
          sobrenome={sobrenome}
          data={dataNascimento}
          email={email}
          cpf={CPF}
        />
    </>
  );
};

export default index;
