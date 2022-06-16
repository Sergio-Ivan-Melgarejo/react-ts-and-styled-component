import styled, {keyframes} from "styled-components";

const animacionDelete = keyframes`
0%{
  background:red;
  color:blue
}
100%{
  background:blue;
  color:red
}
`

export const TaskCardStyle = styled.div`
  text-align: center; 
  color: ${({color}) => color ?  color : "red"};
  background-color: var(--global-bg-card);
  color: var(--global-seconday-text-color);
  padding: 1em;
  border-radius: var(--global-border-radius);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  /* animation: ${animacionDelete} 2s ease-in forwards; */
  transition: color .3s ease-in, box-shadow .3s ease-in;

  &:hover{
    box-shadow: var(--global-box-shadow);
    color: var(--global-text-color);
  }

  &.open{
    box-shadow: var(--global-box-shadow);
    color: var(--global-text-color);
  }

  h3{
    font-size: 1em;
  }
  
  span{
    font-size: .8em;
  }

  p{
    font-size: .9em;
  }

  @media screen and (min-width: 40em) {
    text-align: left;
  }


  // delete button
  & + button{
    position: absolute;
    top: .5em;
    right: .5em;
    background-color: transparent;
    color: var(--global-seconday-text-color);
    border: var(--global-seconday-text-color) 1px solid;
    padding: .5em;
    border-radius: var(--global-border-radius);
    cursor: pointer;
    transform: translateX(5em);
    transition: color .3s ease-in, border-color .3s ease-in, transform .3s ease-in;
    background-color: #00000099;

    &:hover{
      color: var(--global-red);
      border-color: var(--global-red);
      transform: translateX(0em);
    }
  }

  &:hover + button {
    transform: translateX(0em);
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