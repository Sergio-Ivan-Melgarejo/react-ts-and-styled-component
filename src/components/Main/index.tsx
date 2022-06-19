import { ContainerStyle } from "./Main";

interface MainProps {
    children:any
}

const Main = ( {children} : MainProps ) => {
  return (
    <ContainerStyle>
        {children}
    </ContainerStyle>
  )
}

export default Main;
