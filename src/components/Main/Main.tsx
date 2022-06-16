import { MainStyle } from "./MainStyle";

interface MainProps {
    children:any
}

const Main = ( {children} : MainProps ) => {
  return (
    <MainStyle>
        {children}
    </MainStyle>
  )
}

export default Main;
