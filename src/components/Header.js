import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Brand = styled.div`
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  li a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 7px 0;
  z-index: 1000;
`;

const Header = () => (
  <HeaderContainer>
    <Nav>
      <Brand>
        <a href="#">Organización de Eventos</a>
      </Brand>
      <Menu>
       
        <li>
        <NavLink to="/inicio">
        <span>Inicio</span>
        </NavLink>
          </li>
        <li>
        <NavLink to="/eventos">
        <span>Eventos</span>
        </NavLink>
        </li>
        <li><a href="#">Proyectos</a></li>
      </Menu>
    </Nav>
  </HeaderContainer>
);

export default Header;
