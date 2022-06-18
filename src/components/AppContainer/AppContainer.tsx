import styled from "styled-components";

interface Props {
    children:any
}

const StylesContainer =  styled.div`
    max-width: 100em;
    margin: auto;
    width: 100%;
    padding-top: 10em;

  @media (min-width:4s0em) {
    width: 90%;
  }
`

const AppContainer = ( {children} : Props ) => {
  return <StylesContainer>{children}</StylesContainer>;
};

export default AppContainer;
