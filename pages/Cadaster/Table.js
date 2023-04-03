import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StyledTable = styled(Table)`
  width: 90%;
  max-width: 100%;
`;

const StyledTableRow = styled(TableRow)`
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const StyledTableCell = styled(TableCell)``;

const StyledTableCellText = styled(Typography)`
  font-family: "Jost";
  color: black;
  font-weight: 700;
  font-size: 14px;
`;

const TextRow = styled(Typography)`
  font-family: "Jost";
  font-weight: 400;
  font-size: 14px;
`;
const BoxDiv = styled.div`
margin-top:40px;

`


const TableCadaster = ({ nome, sobrenome, data, email, cpf }) => {
  return (
    <BoxDiv>
    <TableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <StyledTableCellText>NOME</StyledTableCellText>
            </StyledTableCell>
            <StyledTableCell>
              <StyledTableCellText>SOBRENOME</StyledTableCellText>
            </StyledTableCell>
            <StyledTableCell>
              <StyledTableCellText>DATA</StyledTableCellText>
            </StyledTableCell>
            <StyledTableCell>
              <StyledTableCellText>E-MAIL</StyledTableCellText>
            </StyledTableCell>
            <StyledTableCell>
              <StyledTableCellText>CPF</StyledTableCellText>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell>
              <TextRow>{nome}</TextRow>
            </StyledTableCell>
            <StyledTableCell>
              <TextRow>{sobrenome}</TextRow>
            </StyledTableCell>
            <StyledTableCell>
              <TextRow>{data}</TextRow>
            </StyledTableCell>
            <StyledTableCell>
              <TextRow>{email}</TextRow>
            </StyledTableCell>
            <StyledTableCell>
              <TextRow>{cpf}</TextRow>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </StyledTable>
    </TableContainer>
    </BoxDiv>
  );
};

export default TableCadaster;
