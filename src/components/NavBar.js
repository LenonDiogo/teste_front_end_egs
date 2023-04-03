import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #32425b;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavbarLink = styled.a`
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #46d5b9;
  }
`;

function Navbar({ nome, sobrenome }) {
  const { push } = useRouter()

  return (
    <NavbarContainer>
      <NavbarLink onClick={() => push('/')  }>
        <Image src={Logo} alt="Logo" width={70} height={70} />
      </NavbarLink>
      <NavbarLinks>
        <NavbarLink>{nome} {sobrenome}</NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
}

export default Navbar;
