import styled, {keyframes,ThemeProvider,createGlobalStyle} from "styled-components";

const animacion = keyframes`
0%{
  background:red;
  color:blue
}
100%{
  background:blue;
  color:red
}
`

const Card = styled.div`
  border: 1px solid red;
  color: ${({color}) => color ?  color : "red"};
  animation: ${animacion} 2s ease-in infinite;

  &:hover{
    background-color: red;
  }
`

// const Box = styled.div`
//   padding: 1rem;
//   margin: 1rem;
//   font-size: 1.5em;
//   color: ${({theme}) => theme.color};
//   background: ${({theme}) => theme.bg};
// `
// const light = {
//   color:"#000",
//   bg:"#fff"
// }

// const dark = {
//   color:"#fff",
//   bg:"#000"
// }

// const BoxExtendida = styled(Box)`
//   border-radius: 50%;

// `

const TaskCard = ({data}:any) => {
  const {id,title,decription} = data
  return (
  <div key={id}>
    <Card color="blue">
        <h2>{title}</h2>
        <p>{decription}</p>
    </Card>
    {/* <ThemeProvider theme={light}>
      <Box>soy una caja light</Box>
    </ThemeProvider>
    <ThemeProvider theme={dark}>
      <BoxExtendida>soy una extendida caja dark</BoxExtendida>
    </ThemeProvider> */}
  </div>
  )
};

export default TaskCard;
