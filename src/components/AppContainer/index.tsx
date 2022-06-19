import { StylesContainer } from "./AppContainer";

interface Props {
    children:any
}

const AppContainer = ( {children} : Props ) => {
    return <StylesContainer>{children}</StylesContainer>;
  };
  
  export default AppContainer;