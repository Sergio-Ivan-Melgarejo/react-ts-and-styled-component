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
  transition: color .3s ease-in, padding-top .3s ease-in;
  /* animation: ${animacionDelete} 2s ease-in forwards; */

  &:hover{
    color: var(--global-text-color);
    padding-top: 3em;
  }

  &.open{
    color: var(--global-text-color);
    padding-top: 3em;
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


  // Buttons
  & ~ button{
    width: 80px;
    position: absolute;
    top: .5em;
    background-color: var(--global-bg-card);
    color: var(--global-seconday-text-color);
    border: var(--global-seconday-text-color) 1px solid;
    padding: .5em;
    border-radius: var(--global-border-radius);
    cursor: pointer;
    transform: translateY(-3em);
    transition: color .3s ease-in, border-color .3s ease-in, transform .3s ease-in;
  }

  &:hover ~ button {
    transform: translateY(0em);
  }

  button:hover ~ & {
    padding-top: 3em;
  }

  &.open ~ button {
    transform: translateY(0);
  }

  // delete button
  & ~ .Delete{
    right: .5em;

    &:hover{
      color: var(--global-red);
      border-color: var(--global-red);
      transform: translateX(0em);
    }
  }

  // delete Edit
  & ~ .Edit{
    left: .5em;

    &:hover{
      color: var(--global-blue);
      border-color: var(--global-blue);
      transform: translateX(0em);
    }
  }

`