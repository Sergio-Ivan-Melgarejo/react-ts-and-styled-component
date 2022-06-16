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
/* animation: ${animacionDelete} 2s ease-in forwards; */
  text-align: center; 
  color: var(--global-seconday-text-color);
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 40em) {
    text-align: left;
  }

  .card{
    background-color: var(--global-bg-card);
    border-radius: var(--global-border-radius);
    padding: 1em; 
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: color .3s ease-in, padding-top .3s ease-in;
  }

  &:hover .card{
    color: var(--global-text-color);
    padding-top: 3em;
  }

  &.open .card{
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

  // Buttons
  & button{
    font-size: .8em;
    width: 5em;
    position: absolute;
    top: .5em;
    background-color: var(--global-bg-card);
    color: var(--global-seconday-text-color);
    border: var(--global-seconday-text-color) 1px solid;
    padding: .3em;
    border-radius: var(--global-border-radius);
    cursor: pointer;
    transform: translateY(-3em);
    transition: color .3s ease-in, border-color .3s ease-in, transform .3s ease-in;
  }

  &:hover button {
    transform: translateY(0em);
  }

  &.open button {
    transform: translateY(0);
  }

  // delete button
  &  .Delete{
    right: .5em;

    &:hover{
      color: var(--global-red);
      border-color: var(--global-red);
    }
  }

  // delete Edit
  &  .Edit{
    left: .5em;

    &:hover{
      color: var(--global-blue);
      border-color: var(--global-blue);
    }
  }
`