import React from "react";
import { NavStyled } from "./Nav.styles.js";

import logo from '../../logo.svg';

interface NavProps {
    title?:string
}

const Nav = ({title}:NavProps) => {
  return <NavStyled>
        <div>
            <img src={logo} alt="logo" />
            <span>{title ? title : "React, Typescript and StyledComponenets"}</span>
        </div>
  </NavStyled>;
};

export default Nav;
