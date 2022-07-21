import styled from "styled-components";


export const StylesContainer = styled.div` 
  text-align: center; 
  height: 100%;
  padding: 1em; 
  background-color: var(--global-bg-card);
  border-radius: var(--global-border-radius);
  color: var(--global-seconday-text-color);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: .5em;
  border: 1px solid transparent;
  transition: color .3s ease-in, border-color .3s ease-in, transform .3s ease-in, box-shadow .3s ease-in;

  &:hover{
    color: var(--global-text-color);
    border-width: 1px;
    border-color: var(--global-blue-opacity) var(--global-red-opacity) var(--global-red-opacity) var(--global-blue-opacity);
    border-style: solid;
    transform: scale(1.01);
    box-shadow: -.25em -.25em 1em var(--global-blue-opacity),
                .25em .25em 1em var(--global-red-opacity);
  }

  @media screen and (min-width: 40em) {
    text-align: left;
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
`