import { StylesContainer } from './Nav';
import logo from '../../assets/logo.svg';

interface NavProps {
    title?:string
}

const Nav = ({title}:NavProps) => {
  return <StylesContainer>
        <div>
            <img src={logo} alt="logo" />
            <span>{title ? title : "React, Typescript and StyledComponenets"}</span>
        </div>
  </StylesContainer>;
};

export default Nav;
