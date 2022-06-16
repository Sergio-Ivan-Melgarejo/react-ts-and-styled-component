import styled from "styled-components";

interface Props {
    children:any
}

const StylesContainer =  styled.div`
    max-width: 100em;
    margin: auto;
    width: 100%;

  @media (min-width:20em) {
    width: 90%;
  }
`

const Container = ( {children} : Props ) => {
  return <StylesContainer>{children}</StylesContainer>;
};

export default Container;
