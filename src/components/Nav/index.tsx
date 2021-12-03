import React from 'react';
import { Link } from "react-router-dom";

import { NavBar } from './style';

import LogoGama from "../../assets/img/logo.png";

const Nav: React.FC = () => {
  return (
    <div>
      <NavBar>
        <img src={LogoGama} alt="Logo Gama" />
        <div className="nav-links">
          <Link to="/">Home </Link>
          <Link to="/courses">Cursos </Link>
          <Link to="/signup">Cadastre-se </Link>
          <Link to="/signin">Login </Link>
        </div>
      </NavBar>
    </div>
  );
}

export default Nav;