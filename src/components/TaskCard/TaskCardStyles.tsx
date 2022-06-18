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
  /* position: relative; */
  /* overflow: hidden; */
  height: 100%;

  @media screen and (min-width: 40em) {
    text-align: left;
  }

  .card{
    height: 100%;
    background-color: var(--global-bg-card);
    border-radius: var(--global-border-radius);
    padding: 1em; 
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: .5em;
    transition: color .3s ease-in, padding-top .3s ease-in;
  }

  &:hover .card{
    color: var(--global-text-color);
  }

  h3{
    font-size: 1em;
  }

  span{
    font-size: .8em;
    color: var(--global-seconday-text-color);
  }

  p{
    font-size: .9em;
  }



  p,h3{
    overflow-y: auto;
    word-break: break-all;
  }

  h3::-webkit-scrollbar,
  p::-webkit-scrollbar {
    width: .4em;     /* Tamaño del scroll en vertical */
    height: 1em;    /* Tamaño del scroll en horizontal */
    display: none;  /* Ocultar scroll */
  }
  p:hover::-webkit-scrollbar,
  h3:hover::-webkit-scrollbar  {
    display: block;
  }

  /* Ponemos un color de fondo y redondeamos las esquinas del thumb */
  h3::-webkit-scrollbar-thumb,
  p::-webkit-scrollbar-thumb {
      background: var(--global-bg-card);
      border-radius: .2em;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  h3::-webkit-scrollbar-thumb:hover,
  p::-webkit-scrollbar-thumb:hover {
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Ponemos un color de fondo y redondeamos las esquinas del track */
  h3::-webkit-scrollbar-track,
  p::-webkit-scrollbar-track {
      border-radius: 4px;
      background: var(--global-bg);
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



  &.open .card{
    color: var(--global-text-color);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 90%;
    max-width: 600px;
    height: 90%;
    max-width: 600px;
    font-size: 1.5em;
  }
  
  &.open h3{
    order: 2;
    border: 1px solid var(--global-seconday-text-color);
    border-radius: var(--global-border-radius);
    padding: .3em;
    flex: 1 1 1px;
  }

  &.open span{
    order: 1;
    border: 1px solid var(--global-seconday-text-color);
    border-radius: var(--global-border-radius);
    padding: .3em;
  }
  
  &.open p{
    order: 3;
    border: 1px solid var(--global-seconday-text-color);
    border-radius: var(--global-border-radius);
    padding: .3em;
    flex: 4 1 1px;
  }

  &.open .bg {
    background-color: #00000099;
    position: fixed;
    left: 0; 
    top: 0;
    width: 100%;
    height: 100%;
  }
`